import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  description: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const ClassificationMaxAggregateInputObjectSchema: z.ZodType<Prisma.ClassificationMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationMaxAggregateInputType>;
export const ClassificationMaxAggregateInputObjectZodSchema = makeSchema();
