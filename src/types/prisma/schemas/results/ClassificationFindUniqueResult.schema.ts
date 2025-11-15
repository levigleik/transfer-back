import * as z from 'zod';
export const ClassificationFindUniqueResultSchema = z.nullable(z.object({
  id: z.number().int(),
  description: z.string(),
  occurences: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));