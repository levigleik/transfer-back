import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const GasAvgAggregateInputObjectSchema: z.ZodType<Prisma.GasAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GasAvgAggregateInputType>;
export const GasAvgAggregateInputObjectZodSchema = makeSchema();
