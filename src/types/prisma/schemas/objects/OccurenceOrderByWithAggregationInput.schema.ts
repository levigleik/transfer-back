import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OccurenceCountOrderByAggregateInputObjectSchema as OccurenceCountOrderByAggregateInputObjectSchema } from './OccurenceCountOrderByAggregateInput.schema';
import { OccurenceAvgOrderByAggregateInputObjectSchema as OccurenceAvgOrderByAggregateInputObjectSchema } from './OccurenceAvgOrderByAggregateInput.schema';
import { OccurenceMaxOrderByAggregateInputObjectSchema as OccurenceMaxOrderByAggregateInputObjectSchema } from './OccurenceMaxOrderByAggregateInput.schema';
import { OccurenceMinOrderByAggregateInputObjectSchema as OccurenceMinOrderByAggregateInputObjectSchema } from './OccurenceMinOrderByAggregateInput.schema';
import { OccurenceSumOrderByAggregateInputObjectSchema as OccurenceSumOrderByAggregateInputObjectSchema } from './OccurenceSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  seriousnessId: SortOrderSchema.optional(),
  classificationId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => OccurenceCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => OccurenceAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => OccurenceMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => OccurenceMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => OccurenceSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const OccurenceOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.OccurenceOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceOrderByWithAggregationInput>;
export const OccurenceOrderByWithAggregationInputObjectZodSchema = makeSchema();
