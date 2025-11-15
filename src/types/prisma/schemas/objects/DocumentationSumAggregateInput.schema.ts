import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const DocumentationSumAggregateInputObjectSchema: z.ZodType<Prisma.DocumentationSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DocumentationSumAggregateInputType>;
export const DocumentationSumAggregateInputObjectZodSchema = makeSchema();
