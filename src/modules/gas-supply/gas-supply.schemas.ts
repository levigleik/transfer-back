import { GasSupplySchema } from "@/types/prisma/schemas";
import { z } from "zod";

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
	gasStationId: true,
});

export const createGasSupplySchema = gasSupplySchema.extend({
	supplyAt: z.coerce.date(),
});

export const updateGasSupplySchema = gasSupplySchema
	.extend({
		supplyAt: z.coerce.date(),
	})
	.partial();

export type CreateGasSupplyDTO = z.infer<typeof createGasSupplySchema>;
export type UpdateGasSupplyDTO = z.infer<typeof updateGasSupplySchema>;
export type PublicGasSupply = z.infer<typeof PublicGasSupplySchema>;
