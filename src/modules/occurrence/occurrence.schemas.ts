import { OccurrenceSchema } from "@/types/prisma/schemas";
import { z } from "zod";

export const PublicOccurrenceSchema = OccurrenceSchema;

export { OccurrenceSchema };

export const occurrenceSchema = OccurrenceSchema.pick({
	description: true,
	occurrenceDate: true,
	registerDate: true,
	seriousnessId: true,
	classificationId: true,
	vehicleId: true,
});

export const createOccurrenceSchema = occurrenceSchema.extend({
	registerDate: z.coerce.date(),
	occurrenceDate: z.coerce.date(),
});

export const updateOccurrenceSchema = occurrenceSchema
	.extend({
		registerDate: z.coerce.date(),
		occurrenceDate: z.coerce.date(),
	})
	.partial();

export type CreateOccurrenceDTO = z.infer<typeof createOccurrenceSchema>;
export type UpdateOccurrenceDTO = z.infer<typeof updateOccurrenceSchema>;
export type PublicOccurrence = z.infer<typeof PublicOccurrenceSchema>;
