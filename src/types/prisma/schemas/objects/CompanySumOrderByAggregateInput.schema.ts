import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const CompanySumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.CompanySumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanySumOrderByAggregateInput>;
export const CompanySumOrderByAggregateInputObjectZodSchema = makeSchema();
