import * as z from 'zod';
export const CompanyFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  cnpj: z.string(),
  vehicles: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));