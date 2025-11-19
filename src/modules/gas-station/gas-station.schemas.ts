import { GasStationSchema } from "@/types/prisma/schemas";
import type { z } from "zod";

export const PublicGasStationSchema = GasStationSchema;

export { GasStationSchema };

export const gasStationSchema = GasStationSchema.pick({
	name: true,
});

export const createGasStationSchema = gasStationSchema;

export const updateGasStationSchema = gasStationSchema.partial();

export type CreateGasStationDTO = z.infer<typeof createGasStationSchema>;
export type UpdateGasStationDTO = z.infer<typeof updateGasStationSchema>;
export type PublicGasStation = z.infer<typeof PublicGasStationSchema>;
