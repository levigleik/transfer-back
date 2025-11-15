import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const GasSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GasSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GasSumOrderByAggregateInput>;
export const GasSumOrderByAggregateInputObjectZodSchema = makeSchema();
