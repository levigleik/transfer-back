import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const SeriousnessMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SeriousnessMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessMinOrderByAggregateInput>;
export const SeriousnessMinOrderByAggregateInputObjectZodSchema = makeSchema();
