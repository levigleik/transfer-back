import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  identifier: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  year: SortOrderSchema.optional(),
  capacity: SortOrderSchema.optional(),
  doors: SortOrderSchema.optional(),
  uf: SortOrderSchema.optional(),
  plateType: SortOrderSchema.optional(),
  plate: SortOrderSchema.optional(),
  renavam: SortOrderSchema.optional(),
  chassis: SortOrderSchema.optional(),
  review: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  gasId: SortOrderSchema.optional(),
  brandId: SortOrderSchema.optional(),
  categoryId: SortOrderSchema.optional(),
  companyId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const VehicleMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VehicleMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleMaxOrderByAggregateInput>;
export const VehicleMaxOrderByAggregateInputObjectZodSchema = makeSchema();
