import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const SeriousnessSumAggregateInputObjectSchema: z.ZodType<Prisma.SeriousnessSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessSumAggregateInputType>;
export const SeriousnessSumAggregateInputObjectZodSchema = makeSchema();
