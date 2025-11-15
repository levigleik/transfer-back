import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const GasStationMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GasStationMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GasStationMinOrderByAggregateInput>;
export const GasStationMinOrderByAggregateInputObjectZodSchema = makeSchema();
