import { GasStationSchema } from "@/types/prisma/schemas";
import type { z } from "zod";

export const PublicGasStationSchema = GasStationSchema;

export { GasStationSchema };

export const createGasStationSchema = GasStationSchema.pick({
	name: true,
});

export const updateGasStationSchema = GasStationSchema.pick({
	name: true,
}).partial();

export type CreateGasStationDTO = z.infer<typeof createGasStationSchema>;
export type UpdateGasStationDTO = z.infer<typeof updateGasStationSchema>;
export type PublicGasStation = z.infer<typeof PublicGasStationSchema>;
