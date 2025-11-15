import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const GasSumAggregateInputObjectSchema: z.ZodType<Prisma.GasSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GasSumAggregateInputType>;
export const GasSumAggregateInputObjectZodSchema = makeSchema();
