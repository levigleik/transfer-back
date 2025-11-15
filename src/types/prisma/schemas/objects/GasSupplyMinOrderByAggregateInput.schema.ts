import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  kmToReview: SortOrderSchema.optional(),
  kmToStop: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  supplyAt: SortOrderSchema.optional(),
  totalPrice: SortOrderSchema.optional(),
  gasId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const GasSupplyMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GasSupplyMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyMinOrderByAggregateInput>;
export const GasSupplyMinOrderByAggregateInputObjectZodSchema = makeSchema();
