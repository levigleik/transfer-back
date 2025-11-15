import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const DocumentationSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DocumentationSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentationSumOrderByAggregateInput>;
export const DocumentationSumOrderByAggregateInputObjectZodSchema = makeSchema();
