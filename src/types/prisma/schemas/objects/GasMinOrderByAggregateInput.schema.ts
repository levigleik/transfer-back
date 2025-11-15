import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const GasMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GasMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GasMinOrderByAggregateInput>;
export const GasMinOrderByAggregateInputObjectZodSchema = makeSchema();
