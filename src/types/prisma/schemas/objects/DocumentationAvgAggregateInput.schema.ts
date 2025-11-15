import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const DocumentationAvgAggregateInputObjectSchema: z.ZodType<Prisma.DocumentationAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DocumentationAvgAggregateInputType>;
export const DocumentationAvgAggregateInputObjectZodSchema = makeSchema();
