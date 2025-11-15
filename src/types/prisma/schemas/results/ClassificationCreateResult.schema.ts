import * as z from 'zod';
export const ClassificationCreateResultSchema = z.object({
  id: z.number().int(),
  description: z.string(),
  occurences: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});