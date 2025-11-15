import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const CompanySumAggregateInputObjectSchema: z.ZodType<Prisma.CompanySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CompanySumAggregateInputType>;
export const CompanySumAggregateInputObjectZodSchema = makeSchema();
