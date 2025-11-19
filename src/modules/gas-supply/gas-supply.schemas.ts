import { GasSupplySchema } from "@/types/prisma/schemas";
import type { z } from "zod";

export const PublicGasSupplySchema = GasSupplySchema;

export { GasSupplySchema };

const gasSupplySchema = GasSupplySchema.pick({
	kmToReview: true,
	kmToStop: true,
	quantity: true,
	supplyAt: true,
	totalPrice: true,
	gasId: true,
	vehicleId: true,
	receipt: true,
});

export const createGasSupplySchema = gasSupplySchema;

export const updateGasSupplySchema = gasSupplySchema.partial();

export type CreateGasSupplyDTO = z.infer<typeof createGasSupplySchema>;
export type UpdateGasSupplyDTO = z.infer<typeof updateGasSupplySchema>;
export type PublicGasSupply = z.infer<typeof PublicGasSupplySchema>;
