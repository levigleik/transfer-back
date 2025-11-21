import { prisma } from "@/lib/prisma";
import { createCachedService } from "@/modules/generic/genericFactory.service";
import type { GasSupply } from "@prisma/client";

const gasSupplyCrudService = createCachedService<
	GasSupply,
	typeof prisma.gasSupply
>("gasSupply", prisma.gasSupply);

export const gasSupplyService = {
	...gasSupplyCrudService,
};
