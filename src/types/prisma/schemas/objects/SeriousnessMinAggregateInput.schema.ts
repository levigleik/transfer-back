import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  level: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const SeriousnessMinAggregateInputObjectSchema: z.ZodType<Prisma.SeriousnessMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessMinAggregateInputType>;
export const SeriousnessMinAggregateInputObjectZodSchema = makeSchema();
