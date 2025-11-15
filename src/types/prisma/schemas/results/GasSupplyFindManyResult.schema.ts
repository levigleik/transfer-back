import * as z from 'zod';
export const GasSupplyFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  kmToReview: z.number().int(),
  kmToStop: z.number().int(),
  quantity: z.number(),
  supplyAt: z.date(),
  totalPrice: z.number(),
  gas: z.unknown(),
  gasId: z.number().int(),
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