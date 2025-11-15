import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ClassificationMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClassificationMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationMaxOrderByAggregateInput>;
export const ClassificationMaxOrderByAggregateInputObjectZodSchema = makeSchema();
