import { prisma } from "@/lib/prisma";
import { createCachedService } from "@/modules/generic/genericFactory.service";
import type { Illustration } from "@prisma/client";

const illustrationCrudService = createCachedService<
	Illustration,
	typeof prisma.illustration
>("illustration", prisma.illustration);

export const illustrationService = {
	...illustrationCrudService,
};
