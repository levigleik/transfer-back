import { prisma } from "@/lib/prisma";
import { createCachedService } from "@/modules/generic/genericFactory.service";
import type { Vehicle } from "@prisma/client";

const vehicleCrudService = createCachedService<Vehicle, typeof prisma.vehicle>(
	"vehicle",
	prisma.vehicle,
);

export const vehicleService = {
	...vehicleCrudService,
};
