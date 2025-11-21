import { prisma } from "@/lib/prisma";
import { createCachedService } from "@/modules/generic/genericFactory.service";
import type { Category } from "@prisma/client";

const categoryCrudService = createCachedService<
	Category,
	typeof prisma.category
>("category", prisma.category);

export const categoryService = {
	...categoryCrudService,
};
