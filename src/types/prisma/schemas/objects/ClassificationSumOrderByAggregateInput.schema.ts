import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const ClassificationSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClassificationSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationSumOrderByAggregateInput>;
export const ClassificationSumOrderByAggregateInputObjectZodSchema = makeSchema();
