import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  occurences: z.boolean().optional()
}).strict();
export const ClassificationCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ClassificationCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationCountOutputTypeSelect>;
export const ClassificationCountOutputTypeSelectObjectZodSchema = makeSchema();
