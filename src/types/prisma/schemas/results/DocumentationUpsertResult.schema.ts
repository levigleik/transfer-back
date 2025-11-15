import * as z from 'zod';
export const DocumentationUpsertResultSchema = z.object({
  id: z.number().int(),
  type: z.string(),
  expiryAt: z.date(),
  antecipateRenewal: z.boolean(),
  days: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date()
});