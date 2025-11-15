import * as z from 'zod';
export const CompanyUpsertResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  cnpj: z.string(),
  vehicles: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});