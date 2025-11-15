import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const GasSupplyOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.GasSupplyOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyOrderByRelationAggregateInput>;
export const GasSupplyOrderByRelationAggregateInputObjectZodSchema = makeSchema();
