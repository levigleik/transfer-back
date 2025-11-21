import { IllustrationSchema } from "@/types/prisma/schemas";
import type { z } from "zod";

export const PublicIllustrationSchema = IllustrationSchema;

export { IllustrationSchema };

export const createIllustrationSchema = IllustrationSchema.pick({
	level: true,
});

export const updateIllustrationSchema = IllustrationSchema.pick({
	level: true,
}).partial();

export type CreateIllustrationDTO = z.infer<typeof createIllustrationSchema>;
export type UpdateIllustrationDTO = z.infer<typeof updateIllustrationSchema>;
export type PublicIllustration = z.infer<typeof PublicIllustrationSchema>;
