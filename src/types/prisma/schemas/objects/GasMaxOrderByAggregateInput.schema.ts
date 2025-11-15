import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const GasMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GasMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GasMaxOrderByAggregateInput>;
export const GasMaxOrderByAggregateInputObjectZodSchema = makeSchema();
