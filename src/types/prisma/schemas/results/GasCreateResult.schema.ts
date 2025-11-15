import * as z from 'zod';
export const GasCreateResultSchema = z.object({
  id: z.number().int(),
  type: z.string(),
  vehicle: z.array(z.unknown()),
  gasSupplies: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});