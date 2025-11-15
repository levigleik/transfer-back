import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CompanyCountOrderByAggregateInputObjectSchema as CompanyCountOrderByAggregateInputObjectSchema } from './CompanyCountOrderByAggregateInput.schema';
import { CompanyAvgOrderByAggregateInputObjectSchema as CompanyAvgOrderByAggregateInputObjectSchema } from './CompanyAvgOrderByAggregateInput.schema';
import { CompanyMaxOrderByAggregateInputObjectSchema as CompanyMaxOrderByAggregateInputObjectSchema } from './CompanyMaxOrderByAggregateInput.schema';
import { CompanyMinOrderByAggregateInputObjectSchema as CompanyMinOrderByAggregateInputObjectSchema } from './CompanyMinOrderByAggregateInput.schema';
import { CompanySumOrderByAggregateInputObjectSchema as CompanySumOrderByAggregateInputObjectSchema } from './CompanySumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  cnpj: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CompanyCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => CompanyAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CompanyMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CompanyMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => CompanySumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CompanyOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.CompanyOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyOrderByWithAggregationInput>;
export const CompanyOrderByWithAggregationInputObjectZodSchema = makeSchema();
