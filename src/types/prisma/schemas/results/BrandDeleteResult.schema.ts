import * as z from 'zod';
export const BrandDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  vehicles: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));