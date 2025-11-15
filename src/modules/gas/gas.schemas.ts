import { GasSchema } from "@/types/prisma/schemas";
import type { z } from "zod";

export const PublicGasSchema = GasSchema;

export { GasSchema };

export const createGasSchema = GasSchema.pick({
	type: true,
});

export const updateGasSchema = GasSchema.pick({
	type: true,
}).partial();

export type CreateGasDTO = z.infer<typeof createGasSchema>;
export type UpdateGasDTO = z.infer<typeof updateGasSchema>;
export type PublicGas = z.infer<typeof PublicGasSchema>;
