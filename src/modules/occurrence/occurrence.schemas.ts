import { OccurrenceSchema } from "@/types/prisma/schemas";
import type { z } from "zod";

export const PublicOccurrenceSchema = OccurrenceSchema;

export { OccurrenceSchema };

export const occurrenceSchema = OccurrenceSchema.pick({
	description: true,
	date: true,
	seriousnessId: true,
	classificationId: true,
	vehicleId: true,
	attachment: true,
});

export const createOccurrenceSchema = occurrenceSchema;

export const updateOccurrenceSchema = occurrenceSchema.partial();

export type CreateOccurrenceDTO = z.infer<typeof createOccurrenceSchema>;
export type UpdateOccurrenceDTO = z.infer<typeof updateOccurrenceSchema>;
export type PublicOccurrence = z.infer<typeof PublicOccurrenceSchema>;
