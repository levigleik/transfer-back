import { ClassificationSchema } from "@/types/prisma/schemas";
import type { z } from "zod";

export const PublicClassificationSchema = ClassificationSchema;

export { ClassificationSchema };

export const createClassificationSchema = ClassificationSchema.pick({
	description: true,
});

export const updateClassificationSchema = ClassificationSchema.pick({
	description: true,
}).partial();

export type CreateClassificationDTO = z.infer<
	typeof createClassificationSchema
>;
export type UpdateClassificationDTO = z.infer<
	typeof updateClassificationSchema
>;
export type PublicClassification = z.infer<typeof PublicClassificationSchema>;
