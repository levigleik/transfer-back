import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  seriousnessId: z.literal(true).optional(),
  classificationId: z.literal(true).optional()
}).strict();
export const OccurenceAvgAggregateInputObjectSchema: z.ZodType<Prisma.OccurenceAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceAvgAggregateInputType>;
export const OccurenceAvgAggregateInputObjectZodSchema = makeSchema();
