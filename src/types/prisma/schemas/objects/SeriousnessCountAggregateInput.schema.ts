import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  level: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SeriousnessCountAggregateInputObjectSchema: z.ZodType<Prisma.SeriousnessCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessCountAggregateInputType>;
export const SeriousnessCountAggregateInputObjectZodSchema = makeSchema();
