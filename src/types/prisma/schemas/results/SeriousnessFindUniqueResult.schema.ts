import * as z from 'zod';
export const SeriousnessFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  level: z.string(),
  occurences: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));