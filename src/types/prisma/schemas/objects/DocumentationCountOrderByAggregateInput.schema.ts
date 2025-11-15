import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  expiryAt: SortOrderSchema.optional(),
  antecipateRenewal: SortOrderSchema.optional(),
  days: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const DocumentationCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DocumentationCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentationCountOrderByAggregateInput>;
export const DocumentationCountOrderByAggregateInputObjectZodSchema = makeSchema();
