import Redis, { type RedisOptions } from "ioredis";
import { env } from "./env";
import { logger } from "./logger";

const getRedisUrl = (): string | undefined => {
	return env.REDIS_URL;
};

const getRedisOptions = (): RedisOptions => {
	const host = env.REDIS_HOST ?? "127.0.0.1";
	const port = env.REDIS_PORT ? Number(env.REDIS_PORT) : 6379;
	const password = env.REDIS_PASSWORD;
	const db = env.REDIS_DB ? Number(env.REDIS_DB) : 0;

	const options: RedisOptions = {
		host,
		port,
		db,
		lazyConnect: true,
		retryStrategy: (times) => {
			return Math.min(times * 50, 2000);
		},
	};

	if (password) {
		options.password = password;
	}

	return options;
};

const createRedisClient = (): Redis => {
	const url = getRedisUrl();
	const client = url
		? new Redis(url, { lazyConnect: true })
		: new Redis(getRedisOptions());

	client.on("connect", () => {
		logger.info("Redis connecting...");
	});

	client.on("ready", () => {
		logger.info("Redis connection ready ✅");
	});

	client.on("error", (err) => {
		logger.error({ err }, "Redis error");
	});

	client.on("close", () => {
		logger.warn("Redis connection closed");
	});

	client.on("reconnecting", () => {
		logger.warn("Redis reconnecting...");
	});

	return client;
};

export const redis = createRedisClient();

export const connectRedis = async (): Promise<void> => {
	// Guard against multiple connects
	if (redis.status === "ready" || redis.status === "connecting") return;
	await redis.connect();
};

export const disconnectRedis = async (): Promise<void> => {
	try {
		await redis.quit();
	} catch {
		// ignore
	}
};

export const checkRedisHealth = async (): Promise<boolean> => {
	try {
		const pong = await redis.ping();
		return pong === "PONG";
	} catch {
		return false;
	}
};
