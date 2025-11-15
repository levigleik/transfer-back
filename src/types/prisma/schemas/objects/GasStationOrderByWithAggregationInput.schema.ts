import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GasStationCountOrderByAggregateInputObjectSchema as GasStationCountOrderByAggregateInputObjectSchema } from './GasStationCountOrderByAggregateInput.schema';
import { GasStationAvgOrderByAggregateInputObjectSchema as GasStationAvgOrderByAggregateInputObjectSchema } from './GasStationAvgOrderByAggregateInput.schema';
import { GasStationMaxOrderByAggregateInputObjectSchema as GasStationMaxOrderByAggregateInputObjectSchema } from './GasStationMaxOrderByAggregateInput.schema';
import { GasStationMinOrderByAggregateInputObjectSchema as GasStationMinOrderByAggregateInputObjectSchema } from './GasStationMinOrderByAggregateInput.schema';
import { GasStationSumOrderByAggregateInputObjectSchema as GasStationSumOrderByAggregateInputObjectSchema } from './GasStationSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => GasStationCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => GasStationAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => GasStationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => GasStationMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => GasStationSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const GasStationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.GasStationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.GasStationOrderByWithAggregationInput>;
export const GasStationOrderByWithAggregationInputObjectZodSchema = makeSchema();
