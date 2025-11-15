import { prisma } from "@/lib/prisma";
import { createCachedService } from "@/modules/generic/genericFactory.service";
import type { GasStation } from "@prisma/client";

const gasStationCrudService = createCachedService<
	GasStation,
	typeof prisma.gasStation
>("gasStation", prisma.gasStation);

export const gasStationService = {
	...gasStationCrudService,
};
