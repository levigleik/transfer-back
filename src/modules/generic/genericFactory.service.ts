import crypto from "node:crypto";
import { redis } from "@/lib/redis";

interface PrismaDelegate {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	findUnique: (args: any) => Promise<any | null>;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	findMany: (args: any) => Promise<any[]>;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	create: (args: any) => Promise<any>;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	update: (args: any) => Promise<any>;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	delete: (args: any) => Promise<any>;
}

/**
 * Cria um serviço de CRUD completo e com cache para um modelo Prisma.
 * @param modelName - O nome do modelo em singular (ex: "user", "product").
 * @param prismaDelegate - O delegate do Prisma para o modelo (ex: prisma.user).
 */
export function createCachedService<
	// T é o tipo do modelo retornado (ex: User)
	T extends { id: number | string },
	// D é o tipo do delegate do Prisma (ex: typeof prisma.user)
	D extends PrismaDelegate,
>(modelName: string, prismaDelegate: D) {
	type FindUniqueArgs = Parameters<D["findUnique"]>[0];
	type FindManyArgs = Parameters<D["findMany"]>[0];
	type CreateArgs = Parameters<D["create"]>[0];
	type UpdateArgs = Parameters<D["update"]>[0];
	type DeleteArgs = Parameters<D["delete"]>[0];

	const modelNamePlural = `${modelName}s`;

	const invalidateItemCache = async (id: number | string) => {
		const key = `${modelName}:${id}`;
		console.log(`CACHE INVALIDATION: Deletando item ${key}`);
		await redis.del(key);
	};

	const invalidateListCache = async () => {
		console.log(`CACHE INVALIDATION: Deletando listas ${modelNamePlural}:*`);
		const keys = await redis.keys(`${modelNamePlural}:*`);
		if (keys.length > 0) {
			await redis.del(keys);
		}
	};

	const findOne = async (args: FindUniqueArgs): Promise<T | null> => {
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		const id = (args as any)?.where?.id;
		if (!id) throw new Error("findOne requer um 'id' nos argumentos 'where'.");

		const cacheKey = `${modelName}:${id}`;

		const cached = await redis.get(cacheKey);
		if (cached) {
			console.log(`CACHE HIT: Servindo ${cacheKey}`);
			return JSON.parse(cached) as T;
		}

		console.log(`CACHE MISS: Buscando ${cacheKey} no banco.`);
		const item = await prismaDelegate.findUnique(args);

		if (item) {
			await redis.set(cacheKey, JSON.stringify(item));
			await redis.expire(cacheKey, 60);
		}

		return item;
	};

	const find = async (args: FindManyArgs): Promise<T[]> => {
		const queryHash = crypto
			.createHash("md5")
			.update(JSON.stringify(args))
			.digest("hex");
		const cacheKey = `${modelNamePlural}:${queryHash}`;

		const cached = await redis.get(cacheKey);
		if (cached) {
			console.log(`CACHE HIT: Servindo lista ${cacheKey}`);
			return JSON.parse(cached) as T[];
		}

		console.log(`CACHE MISS: Buscando lista ${cacheKey} no banco.`);
		const items = await prismaDelegate.findMany(args);

		await redis.set(cacheKey, JSON.stringify(items));
		await redis.expire(cacheKey, 60);

		return items;
	};

	const create = async (args: CreateArgs): Promise<T> => {
		const newItem = await prismaDelegate.create(args);

		await invalidateListCache();
		return newItem;
	};

	const update = async (args: UpdateArgs): Promise<T> => {
		const updatedItem = await prismaDelegate.update(args);
		await invalidateItemCache(updatedItem.id);
		await invalidateListCache();
		return updatedItem;
	};

	const deleteOne = async (args: DeleteArgs): Promise<T> => {
		const itemToDelete = await prismaDelegate.findUnique(args);
		if (!itemToDelete) {
			throw new Error(`Item not found: ${JSON.stringify(args)}`);
		}

		await prismaDelegate.delete(args);
		await invalidateItemCache(itemToDelete.id);
		await invalidateListCache();
		return itemToDelete;
	};

	return { findOne, find, create, update, deleteOne };
}
