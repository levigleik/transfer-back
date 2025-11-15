import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  identifier: SortOrderSchema.optional(),
  review: SortOrderSchema.optional(),
  gasId: SortOrderSchema.optional(),
  brandId: SortOrderSchema.optional(),
  categoryId: SortOrderSchema.optional(),
  companyId: SortOrderSchema.optional()
}).strict();
export const VehicleSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.VehicleSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleSumOrderByAggregateInput>;
export const VehicleSumOrderByAggregateInputObjectZodSchema = makeSchema();
