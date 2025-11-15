import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const GasStationMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GasStationMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GasStationMaxOrderByAggregateInput>;
export const GasStationMaxOrderByAggregateInputObjectZodSchema = makeSchema();
