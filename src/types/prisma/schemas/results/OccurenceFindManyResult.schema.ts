import * as z from 'zod';
export const OccurenceFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  date: z.date(),
  description: z.string(),
  seriousness: z.unknown(),
  seriousnessId: z.number().int(),
  classification: z.unknown(),
  classificationId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});