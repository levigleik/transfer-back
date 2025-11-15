import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SeriousnessOrderByWithRelationInputObjectSchema as SeriousnessOrderByWithRelationInputObjectSchema } from './SeriousnessOrderByWithRelationInput.schema';
import { ClassificationOrderByWithRelationInputObjectSchema as ClassificationOrderByWithRelationInputObjectSchema } from './ClassificationOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  seriousnessId: SortOrderSchema.optional(),
  classificationId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  seriousness: z.lazy(() => SeriousnessOrderByWithRelationInputObjectSchema).optional(),
  classification: z.lazy(() => ClassificationOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const OccurenceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.OccurenceOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceOrderByWithRelationInput>;
export const OccurenceOrderByWithRelationInputObjectZodSchema = makeSchema();
