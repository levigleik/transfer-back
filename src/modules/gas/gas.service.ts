import { prisma } from "@/lib/prisma";
import { createCachedService } from "@/modules/generic/genericFactory.service";
import type { Gas } from "@prisma/client";

const gasCrudService = createCachedService<
	Gas,
	typeof prisma.gas
>("gas", prisma.gas);

export const gasService = {
	...gasCrudService,
};
