import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GasCountOrderByAggregateInputObjectSchema as GasCountOrderByAggregateInputObjectSchema } from './GasCountOrderByAggregateInput.schema';
import { GasAvgOrderByAggregateInputObjectSchema as GasAvgOrderByAggregateInputObjectSchema } from './GasAvgOrderByAggregateInput.schema';
import { GasMaxOrderByAggregateInputObjectSchema as GasMaxOrderByAggregateInputObjectSchema } from './GasMaxOrderByAggregateInput.schema';
import { GasMinOrderByAggregateInputObjectSchema as GasMinOrderByAggregateInputObjectSchema } from './GasMinOrderByAggregateInput.schema';
import { GasSumOrderByAggregateInputObjectSchema as GasSumOrderByAggregateInputObjectSchema } from './GasSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => GasCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => GasAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => GasMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => GasMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => GasSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const GasOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.GasOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.GasOrderByWithAggregationInput>;
export const GasOrderByWithAggregationInputObjectZodSchema = makeSchema();
