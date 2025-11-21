import { prisma } from "@/lib/prisma";
import { createCachedService } from "@/modules/generic/genericFactory.service";
import type { Documentation, File } from "@prisma/client";

const documentationCrudService = createCachedService<
	Documentation,
	typeof prisma.documentation
>("documentation", prisma.documentation);

export const documentationService = {
	...documentationCrudService,
};
