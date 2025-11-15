import * as z from 'zod';
export const SeriousnessCreateResultSchema = z.object({
  id: z.number().int(),
  level: z.string(),
  occurences: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});