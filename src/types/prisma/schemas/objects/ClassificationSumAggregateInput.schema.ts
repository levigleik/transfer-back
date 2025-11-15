import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const ClassificationSumAggregateInputObjectSchema: z.ZodType<Prisma.ClassificationSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationSumAggregateInputType>;
export const ClassificationSumAggregateInputObjectZodSchema = makeSchema();
