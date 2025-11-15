import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const SeriousnessMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SeriousnessMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessMaxOrderByAggregateInput>;
export const SeriousnessMaxOrderByAggregateInputObjectZodSchema = makeSchema();
