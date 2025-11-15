import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const GasAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GasAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GasAvgOrderByAggregateInput>;
export const GasAvgOrderByAggregateInputObjectZodSchema = makeSchema();
