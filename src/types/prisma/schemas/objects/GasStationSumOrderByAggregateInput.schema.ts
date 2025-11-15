import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const GasStationSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GasStationSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GasStationSumOrderByAggregateInput>;
export const GasStationSumOrderByAggregateInputObjectZodSchema = makeSchema();
