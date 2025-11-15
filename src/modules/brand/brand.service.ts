import { prisma } from "@/lib/prisma";
import { createCachedService } from "@/modules/generic/genericFactory.service";
import type { Brand } from "@prisma/client";

const brandCrudService = createCachedService<
	Brand,
	typeof prisma.brand
>("brand", prisma.brand);

export const brandService = {
	...brandCrudService,
};
