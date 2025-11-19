import { CategorySchema } from "@/types/prisma/schemas";
import type { z } from "zod";

export const PublicCategorySchema = CategorySchema;

export { CategorySchema };

const categorySchema = CategorySchema.pick({
	name: true,
});

export const createCategorySchema = categorySchema;
export const updateCategorySchema = categorySchema.partial();

export type CreateCategoryDTO = z.infer<typeof createCategorySchema>;
export type UpdateCategoryDTO = z.infer<typeof updateCategorySchema>;
export type PublicCategory = z.infer<typeof PublicCategorySchema>;
