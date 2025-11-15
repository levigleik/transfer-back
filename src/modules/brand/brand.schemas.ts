import { BrandSchema } from "@/types/prisma/schemas";
import type { z } from "zod";

export const PublicBrandSchema = BrandSchema;

export { BrandSchema };

export const createBrandSchema = BrandSchema.pick({
	name: true,
});

export const updateBrandSchema = BrandSchema.pick({
	name: true,
}).partial();

export type CreateBrandDTO = z.infer<typeof createBrandSchema>;
export type UpdateBrandDTO = z.infer<typeof updateBrandSchema>;
export type PublicBrand = z.infer<typeof PublicBrandSchema>;
