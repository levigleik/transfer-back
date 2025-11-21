import { prisma } from "@/lib/prisma";
import { createCachedService } from "@/modules/generic/genericFactory.service";
import type { Classification } from "@prisma/client";

const classificationCrudService = createCachedService<
	Classification,
	typeof prisma.classification
>("classification", prisma.classification);

export const classificationService = {
	...classificationCrudService,
};
