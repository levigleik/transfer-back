import * as z from 'zod';
export const CompanyDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  cnpj: z.string(),
  vehicles: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));