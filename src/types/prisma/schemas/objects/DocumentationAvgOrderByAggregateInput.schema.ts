import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const DocumentationAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DocumentationAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentationAvgOrderByAggregateInput>;
export const DocumentationAvgOrderByAggregateInputObjectZodSchema = makeSchema();
