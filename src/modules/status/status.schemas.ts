import { StatusSchema } from "@/types/prisma/schemas";
import type { z } from "zod";

export const PublicStatusSchema = StatusSchema;

export { StatusSchema };

export const createStatusSchema = StatusSchema.pick({
	name: true,
});

export const updateStatusSchema = StatusSchema.pick({
	name: true,
}).partial();

export type CreateStatusDTO = z.infer<typeof createStatusSchema>;
export type UpdateStatusDTO = z.infer<typeof updateStatusSchema>;
export type PublicStatus = z.infer<typeof PublicStatusSchema>;
