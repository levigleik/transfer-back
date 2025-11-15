import { CompanySchema } from "@/types/prisma/schemas";
import type { z } from "zod";

export const PublicCompanySchema = CompanySchema;

export { CompanySchema };

export const createCompanySchema = CompanySchema.pick({
	name: true,
	cnpj: true,
});

export const updateCompanySchema = CompanySchema.pick({
	name: true,
	cnpj: true,
}).partial();

export type CreateCompanyDTO = z.infer<typeof createCompanySchema>;
export type UpdateCompanyDTO = z.infer<typeof updateCompanySchema>;
export type PublicCompany = z.infer<typeof PublicCompanySchema>;
