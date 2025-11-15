import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ClassificationCountAggregateInputObjectSchema: z.ZodType<Prisma.ClassificationCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationCountAggregateInputType>;
export const ClassificationCountAggregateInputObjectZodSchema = makeSchema();
