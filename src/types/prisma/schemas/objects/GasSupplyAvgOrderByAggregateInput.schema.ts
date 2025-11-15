import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  kmToReview: SortOrderSchema.optional(),
  kmToStop: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  totalPrice: SortOrderSchema.optional(),
  gasId: SortOrderSchema.optional()
}).strict();
export const GasSupplyAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GasSupplyAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyAvgOrderByAggregateInput>;
export const GasSupplyAvgOrderByAggregateInputObjectZodSchema = makeSchema();
