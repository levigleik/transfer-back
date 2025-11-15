import * as z from 'zod';
export const GasStationDeleteResultSchema = z.nullable(z.object({
  id: z.number().int(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
}));