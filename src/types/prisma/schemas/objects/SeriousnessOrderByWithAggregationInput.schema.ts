import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SeriousnessCountOrderByAggregateInputObjectSchema as SeriousnessCountOrderByAggregateInputObjectSchema } from './SeriousnessCountOrderByAggregateInput.schema';
import { SeriousnessAvgOrderByAggregateInputObjectSchema as SeriousnessAvgOrderByAggregateInputObjectSchema } from './SeriousnessAvgOrderByAggregateInput.schema';
import { SeriousnessMaxOrderByAggregateInputObjectSchema as SeriousnessMaxOrderByAggregateInputObjectSchema } from './SeriousnessMaxOrderByAggregateInput.schema';
import { SeriousnessMinOrderByAggregateInputObjectSchema as SeriousnessMinOrderByAggregateInputObjectSchema } from './SeriousnessMinOrderByAggregateInput.schema';
import { SeriousnessSumOrderByAggregateInputObjectSchema as SeriousnessSumOrderByAggregateInputObjectSchema } from './SeriousnessSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => SeriousnessCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SeriousnessAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SeriousnessMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SeriousnessMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SeriousnessSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SeriousnessOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SeriousnessOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessOrderByWithAggregationInput>;
export const SeriousnessOrderByWithAggregationInputObjectZodSchema = makeSchema();
