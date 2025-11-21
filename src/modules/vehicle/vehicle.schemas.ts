import { VehicleSchema } from "@/types/prisma/schemas";
import { z } from "zod";

export const PublicVehicleSchema = VehicleSchema;

export { VehicleSchema };

export const createVehicleSchema = VehicleSchema.pick({
	identifier: true,
	model: true,
	year: true,
	capacity: true,
	doors: true,
	uf: true,
	plateType: true,
	plate: true,
	renavam: true,
	chassi: true,
	review: true,
	description: true,
	gasId: true,
	companyId: true,
	categoryId: true,
	brandId: true,
	classificationId: true,
	statusId: true,
}).extend({
	photos: z.array(z.string()).optional(),
});

export const updateVehicleSchema = VehicleSchema.pick({
	identifier: true,
	model: true,
	year: true,
	capacity: true,
	doors: true,
	uf: true,
	plateType: true,
	plate: true,
	renavam: true,
	chassi: true,
	review: true,
	description: true,
	photos: true,
	gasId: true,
	companyId: true,
	categoryId: true,
	brandId: true,
	classificationId: true,
	statusId: true,
}).partial();

export type CreateVehicleDTO = z.infer<typeof createVehicleSchema>;
export type UpdateVehicleDTO = z.infer<typeof updateVehicleSchema>;
export type PublicVehicle = z.infer<typeof PublicVehicleSchema>;
