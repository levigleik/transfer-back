import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  seriousnessId: SortOrderSchema.optional(),
  classificationId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const OccurenceMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.OccurenceMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceMaxOrderByAggregateInput>;
export const OccurenceMaxOrderByAggregateInputObjectZodSchema = makeSchema();
