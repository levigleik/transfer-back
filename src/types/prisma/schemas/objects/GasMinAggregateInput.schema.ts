import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  type: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const GasMinAggregateInputObjectSchema: z.ZodType<Prisma.GasMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GasMinAggregateInputType>;
export const GasMinAggregateInputObjectZodSchema = makeSchema();
