import { UserSchema } from "@/types/prisma/schemas";
import { z } from "zod";

export const PublicUserSchema = UserSchema.omit({ password: true });

export { UserSchema };

export const createUserSchema = UserSchema.pick({
	email: true,
	name: true,
	password: true,
}).extend({
	email: z.email("Invalid email format"),
});

export const updateUserSchema = UserSchema.pick({
	name: true,
}).partial();

export type CreateUserDTO = z.infer<typeof createUserSchema>;
export type UpdateUserDTO = z.infer<typeof updateUserSchema>;
export type PublicUser = z.infer<typeof PublicUserSchema>;
