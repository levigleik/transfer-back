import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  seriousnessId: SortOrderSchema.optional(),
  classificationId: SortOrderSchema.optional()
}).strict();
export const OccurenceAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OccurenceAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceAvgOrderByAggregateInput>;
export const OccurenceAvgOrderByAggregateInputObjectZodSchema = makeSchema();
