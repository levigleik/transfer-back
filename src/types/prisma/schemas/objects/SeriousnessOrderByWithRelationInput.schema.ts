import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OccurenceOrderByRelationAggregateInputObjectSchema as OccurenceOrderByRelationAggregateInputObjectSchema } from './OccurenceOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  level: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  occurences: z.lazy(() => OccurenceOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const SeriousnessOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SeriousnessOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessOrderByWithRelationInput>;
export const SeriousnessOrderByWithRelationInputObjectZodSchema = makeSchema();
