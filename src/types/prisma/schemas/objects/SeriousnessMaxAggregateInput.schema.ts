import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  level: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const SeriousnessMaxAggregateInputObjectSchema: z.ZodType<Prisma.SeriousnessMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessMaxAggregateInputType>;
export const SeriousnessMaxAggregateInputObjectZodSchema = makeSchema();
