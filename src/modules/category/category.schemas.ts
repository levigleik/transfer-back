import { CategorySchema } from "@/types/prisma/schemas";
import type { z } from "zod";

export const PublicCategorySchema = CategorySchema;

export { CategorySchema };

export const createCategorySchema = CategorySchema.pick({
	name: true,
});

export const updateCategorySchema = CategorySchema.pick({
	name: true,
}).partial();

export type CreateCategoryDTO = z.infer<typeof createCategorySchema>;
export type UpdateCategoryDTO = z.infer<typeof updateCategorySchema>;
export type PublicCategory = z.infer<typeof PublicCategorySchema>;
