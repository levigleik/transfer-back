import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OccurenceOrderByRelationAggregateInputObjectSchema as OccurenceOrderByRelationAggregateInputObjectSchema } from './OccurenceOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  occurences: z.lazy(() => OccurenceOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ClassificationOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ClassificationOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationOrderByWithRelationInput>;
export const ClassificationOrderByWithRelationInputObjectZodSchema = makeSchema();
