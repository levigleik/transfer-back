import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ClassificationCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClassificationCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationCountOrderByAggregateInput>;
export const ClassificationCountOrderByAggregateInputObjectZodSchema = makeSchema();
