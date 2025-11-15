import { prisma } from "@/lib/prisma";
import { createCachedService } from "@/modules/generic/genericFactory.service";
import type { User } from "@prisma/client";
import bcrypt from "bcrypt";
import type { CreateUserDTO, UpdateUserDTO } from "./user.schemas";

const userCrudService = createCachedService<User, typeof prisma.user>(
	"user",
	prisma.user,
);

async function comparePassword(
	password: string,
	hash: string,
): Promise<boolean> {
	return bcrypt.compare(password, hash);
}

async function hashPassword(password: string): Promise<string> {
	const salt = await bcrypt.genSalt(10);
	return bcrypt.hash(password, salt);
}

// Sobrescreve a função 'create' padrão para incluir a lógica de hash de senha
const createWithPasswordHashing = async (
	data: CreateUserDTO,
): Promise<User> => {
	const hashedPassword = await hashPassword(data.password);
	return userCrudService.create({
		data: { ...data, password: hashedPassword },
	});
};

export const userService = {
	...userCrudService,
	create: createWithPasswordHashing,
	comparePassword,
	hashPassword,
};
