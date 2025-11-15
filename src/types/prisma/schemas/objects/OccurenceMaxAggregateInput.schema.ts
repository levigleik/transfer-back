import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  date: z.literal(true).optional(),
  description: z.literal(true).optional(),
  seriousnessId: z.literal(true).optional(),
  classificationId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const OccurenceMaxAggregateInputObjectSchema: z.ZodType<Prisma.OccurenceMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceMaxAggregateInputType>;
export const OccurenceMaxAggregateInputObjectZodSchema = makeSchema();
