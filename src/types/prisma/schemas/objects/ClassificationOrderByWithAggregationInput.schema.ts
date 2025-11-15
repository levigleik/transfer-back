import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ClassificationCountOrderByAggregateInputObjectSchema as ClassificationCountOrderByAggregateInputObjectSchema } from './ClassificationCountOrderByAggregateInput.schema';
import { ClassificationAvgOrderByAggregateInputObjectSchema as ClassificationAvgOrderByAggregateInputObjectSchema } from './ClassificationAvgOrderByAggregateInput.schema';
import { ClassificationMaxOrderByAggregateInputObjectSchema as ClassificationMaxOrderByAggregateInputObjectSchema } from './ClassificationMaxOrderByAggregateInput.schema';
import { ClassificationMinOrderByAggregateInputObjectSchema as ClassificationMinOrderByAggregateInputObjectSchema } from './ClassificationMinOrderByAggregateInput.schema';
import { ClassificationSumOrderByAggregateInputObjectSchema as ClassificationSumOrderByAggregateInputObjectSchema } from './ClassificationSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ClassificationCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ClassificationAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ClassificationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ClassificationMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ClassificationSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ClassificationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ClassificationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationOrderByWithAggregationInput>;
export const ClassificationOrderByWithAggregationInputObjectZodSchema = makeSchema();
