import * as z from 'zod';
export const VehicleFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.number().int(),
  identifier: z.number().int(),
  model: z.string(),
  year: z.string(),
  capacity: z.string(),
  doors: z.string(),
  uf: z.string(),
  plateType: z.unknown(),
  plate: z.string(),
  renavam: z.string(),
  chassis: z.string(),
  review: z.number().int(),
  description: z.string().optional(),
  photos: z.array(z.string()),
  gas: z.unknown(),
  gasId: z.number().int(),
  brand: z.unknown(),
  brandId: z.number().int(),
  category: z.unknown(),
  categoryId: z.number().int(),
  company: z.unknown(),
  companyId: z.number().int(),
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