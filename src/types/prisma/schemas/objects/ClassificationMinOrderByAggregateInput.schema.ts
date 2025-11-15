import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ClassificationMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClassificationMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationMinOrderByAggregateInput>;
export const ClassificationMinOrderByAggregateInputObjectZodSchema = makeSchema();
