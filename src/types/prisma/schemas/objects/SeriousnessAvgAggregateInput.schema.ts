import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const SeriousnessAvgAggregateInputObjectSchema: z.ZodType<Prisma.SeriousnessAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessAvgAggregateInputType>;
export const SeriousnessAvgAggregateInputObjectZodSchema = makeSchema();
