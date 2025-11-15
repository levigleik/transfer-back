import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const SeriousnessSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SeriousnessSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessSumOrderByAggregateInput>;
export const SeriousnessSumOrderByAggregateInputObjectZodSchema = makeSchema();
