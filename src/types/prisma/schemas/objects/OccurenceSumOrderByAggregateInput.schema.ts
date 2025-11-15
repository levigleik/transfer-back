import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  seriousnessId: SortOrderSchema.optional(),
  classificationId: SortOrderSchema.optional()
}).strict();
export const OccurenceSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OccurenceSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceSumOrderByAggregateInput>;
export const OccurenceSumOrderByAggregateInputObjectZodSchema = makeSchema();
