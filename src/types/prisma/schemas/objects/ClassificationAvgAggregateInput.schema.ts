import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const ClassificationAvgAggregateInputObjectSchema: z.ZodType<Prisma.ClassificationAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationAvgAggregateInputType>;
export const ClassificationAvgAggregateInputObjectZodSchema = makeSchema();
