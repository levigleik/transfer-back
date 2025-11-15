import { prisma } from "@/lib/prisma";
import { createCachedService } from "@/modules/generic/genericFactory.service";
import type { Company } from "@prisma/client";

const companyCrudService = createCachedService<
	Company,
	typeof prisma.company
>("company", prisma.company);

export const companyService = {
	...companyCrudService,
};
