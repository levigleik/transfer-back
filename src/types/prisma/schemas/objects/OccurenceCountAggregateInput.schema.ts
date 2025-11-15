import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  date: z.literal(true).optional(),
  description: z.literal(true).optional(),
  seriousnessId: z.literal(true).optional(),
  classificationId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const OccurenceCountAggregateInputObjectSchema: z.ZodType<Prisma.OccurenceCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceCountAggregateInputType>;
export const OccurenceCountAggregateInputObjectZodSchema = makeSchema();
