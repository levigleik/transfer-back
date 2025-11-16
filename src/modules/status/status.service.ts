import { prisma } from "@/lib/prisma";
import { createCachedService } from "@/modules/generic/genericFactory.service";
import type { Status } from "@prisma/client";

const statusCrudService = createCachedService<
	Status,
	typeof prisma.status
>("status", prisma.status);

export const statusService = {
	...statusCrudService,
};
