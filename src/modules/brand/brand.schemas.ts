import { BrandSchema } from "@/types/prisma/schemas";
import type { z } from "zod";

export const PublicBrandSchema = BrandSchema;

export { BrandSchema };

export const brandSchema = BrandSchema.pick({
	name: true,
});
export const createBrandSchema = brandSchema;

export const updateBrandSchema = brandSchema.partial();

export type CreateBrandDTO = z.infer<typeof createBrandSchema>;
export type UpdateBrandDTO = z.infer<typeof updateBrandSchema>;
export type PublicBrand = z.infer<typeof PublicBrandSchema>;
