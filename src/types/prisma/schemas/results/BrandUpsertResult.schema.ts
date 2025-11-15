import * as z from 'zod';
export const BrandUpsertResultSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  vehicles: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});