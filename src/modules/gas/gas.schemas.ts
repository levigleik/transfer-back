import { GasSchema } from "@/types/prisma/schemas";
import type { z } from "zod";

export const PublicGasSchema = GasSchema;

export { GasSchema };

export const gasSchema = GasSchema.pick({
	type: true,
});

export const createGasSchema = gasSchema;

export const updateGasSchema = gasSchema.partial();

export type CreateGasDTO = z.infer<typeof createGasSchema>;
export type UpdateGasDTO = z.infer<typeof updateGasSchema>;
export type PublicGas = z.infer<typeof PublicGasSchema>;
