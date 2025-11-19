import { StatusSchema } from "@/types/prisma/schemas";
import type { z } from "zod";

export const PublicStatusSchema = StatusSchema;

export { StatusSchema };

export const statusSchema = StatusSchema.pick({
	name: true,
});

export const createStatusSchema = statusSchema;

export const updateStatusSchema = statusSchema.partial();

export type CreateStatusDTO = z.infer<typeof createStatusSchema>;
export type UpdateStatusDTO = z.infer<typeof updateStatusSchema>;
export type PublicStatus = z.infer<typeof PublicStatusSchema>;
