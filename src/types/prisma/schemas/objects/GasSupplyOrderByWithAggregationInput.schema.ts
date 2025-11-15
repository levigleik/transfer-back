import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GasSupplyCountOrderByAggregateInputObjectSchema as GasSupplyCountOrderByAggregateInputObjectSchema } from './GasSupplyCountOrderByAggregateInput.schema';
import { GasSupplyAvgOrderByAggregateInputObjectSchema as GasSupplyAvgOrderByAggregateInputObjectSchema } from './GasSupplyAvgOrderByAggregateInput.schema';
import { GasSupplyMaxOrderByAggregateInputObjectSchema as GasSupplyMaxOrderByAggregateInputObjectSchema } from './GasSupplyMaxOrderByAggregateInput.schema';
import { GasSupplyMinOrderByAggregateInputObjectSchema as GasSupplyMinOrderByAggregateInputObjectSchema } from './GasSupplyMinOrderByAggregateInput.schema';
import { GasSupplySumOrderByAggregateInputObjectSchema as GasSupplySumOrderByAggregateInputObjectSchema } from './GasSupplySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  kmToReview: SortOrderSchema.optional(),
  kmToStop: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  supplyAt: SortOrderSchema.optional(),
  totalPrice: SortOrderSchema.optional(),
  gasId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => GasSupplyCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => GasSupplyAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => GasSupplyMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => GasSupplyMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => GasSupplySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const GasSupplyOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.GasSupplyOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyOrderByWithAggregationInput>;
export const GasSupplyOrderByWithAggregationInputObjectZodSchema = makeSchema();
