import { prisma } from "@/lib/prisma";
import { createCachedService } from "@/modules/generic/genericFactory.service";
import type { Seriousness } from "@prisma/client";

const seriousnessCrudService = createCachedService<
	Seriousness,
	typeof prisma.seriousness
>("seriousness", prisma.seriousness);

export const seriousnessService = {
	...seriousnessCrudService,
};
