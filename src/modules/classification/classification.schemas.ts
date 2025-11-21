import { ClassificationSchema } from "@/types/prisma/schemas";
import type { z } from "zod";

export const PublicClassificationSchema = ClassificationSchema;

export { ClassificationSchema };

const classificationSchema = ClassificationSchema.pick({
	description: true,
});

export const createClassificationSchema = classificationSchema;

export const updateClassificationSchema = ClassificationSchema.partial();

export type CreateClassificationDTO = z.infer<
	typeof createClassificationSchema
>;
export type UpdateClassificationDTO = z.infer<
	typeof updateClassificationSchema
>;
export type PublicClassification = z.infer<typeof PublicClassificationSchema>;
