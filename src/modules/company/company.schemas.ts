import { CompanySchema } from "@/types/prisma/schemas";
import type { z } from "zod";

export const PublicCompanySchema = CompanySchema;

export { CompanySchema };

const companySchema = CompanySchema.pick({
	name: true,
	cnpj: true,
});

export const createCompanySchema = companySchema;

export const updateCompanySchema = companySchema.partial();

export type CreateCompanyDTO = z.infer<typeof createCompanySchema>;
export type UpdateCompanyDTO = z.infer<typeof updateCompanySchema>;
export type PublicCompany = z.infer<typeof PublicCompanySchema>;
