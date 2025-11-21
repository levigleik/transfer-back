import { prisma } from "@/lib/prisma";
import { createCachedService } from "@/modules/generic/genericFactory.service";
import type { Occurrence } from "@prisma/client";

const occurrenceCrudService = createCachedService<
	Occurrence,
	typeof prisma.occurrence
>("occurrence", prisma.occurrence);

export const occurrenceService = {
	...occurrenceCrudService,
};
