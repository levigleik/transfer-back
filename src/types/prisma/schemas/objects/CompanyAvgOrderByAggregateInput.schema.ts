import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const CompanyAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CompanyAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyAvgOrderByAggregateInput>;
export const CompanyAvgOrderByAggregateInputObjectZodSchema = makeSchema();
