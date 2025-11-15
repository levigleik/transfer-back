import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const OccurenceOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.OccurenceOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceOrderByRelationAggregateInput>;
export const OccurenceOrderByRelationAggregateInputObjectZodSchema = makeSchema();
