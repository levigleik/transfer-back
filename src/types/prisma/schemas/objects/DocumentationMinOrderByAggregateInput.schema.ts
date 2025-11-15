import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  expiryAt: SortOrderSchema.optional(),
  antecipateRenewal: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const DocumentationMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DocumentationMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentationMinOrderByAggregateInput>;
export const DocumentationMinOrderByAggregateInputObjectZodSchema = makeSchema();
