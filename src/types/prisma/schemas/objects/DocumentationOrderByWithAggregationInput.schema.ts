import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DocumentationCountOrderByAggregateInputObjectSchema as DocumentationCountOrderByAggregateInputObjectSchema } from './DocumentationCountOrderByAggregateInput.schema';
import { DocumentationAvgOrderByAggregateInputObjectSchema as DocumentationAvgOrderByAggregateInputObjectSchema } from './DocumentationAvgOrderByAggregateInput.schema';
import { DocumentationMaxOrderByAggregateInputObjectSchema as DocumentationMaxOrderByAggregateInputObjectSchema } from './DocumentationMaxOrderByAggregateInput.schema';
import { DocumentationMinOrderByAggregateInputObjectSchema as DocumentationMinOrderByAggregateInputObjectSchema } from './DocumentationMinOrderByAggregateInput.schema';
import { DocumentationSumOrderByAggregateInputObjectSchema as DocumentationSumOrderByAggregateInputObjectSchema } from './DocumentationSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  expiryAt: SortOrderSchema.optional(),
  antecipateRenewal: SortOrderSchema.optional(),
  days: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => DocumentationCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => DocumentationAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => DocumentationMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => DocumentationMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => DocumentationSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const DocumentationOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.DocumentationOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentationOrderByWithAggregationInput>;
export const DocumentationOrderByWithAggregationInputObjectZodSchema = makeSchema();
