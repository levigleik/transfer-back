import { SeriousnessSchema } from "@/types/prisma/schemas";
import type { z } from "zod";

export const PublicSeriousnessSchema = SeriousnessSchema;

export { SeriousnessSchema };

export const seriousnessSchema = SeriousnessSchema.pick({
	level: true,
});

export const createSeriousnessSchema = seriousnessSchema;

export const updateSeriousnessSchema = seriousnessSchema.partial();

export type CreateSeriousnessDTO = z.infer<typeof createSeriousnessSchema>;
export type UpdateSeriousnessDTO = z.infer<typeof updateSeriousnessSchema>;
export type PublicSeriousness = z.infer<typeof PublicSeriousnessSchema>;
