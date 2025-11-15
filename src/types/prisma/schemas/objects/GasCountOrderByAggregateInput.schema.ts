import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const GasCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GasCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GasCountOrderByAggregateInput>;
export const GasCountOrderByAggregateInputObjectZodSchema = makeSchema();
