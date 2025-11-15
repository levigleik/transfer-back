import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  occurences: z.boolean().optional()
}).strict();
export const SeriousnessCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.SeriousnessCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessCountOutputTypeSelect>;
export const SeriousnessCountOutputTypeSelectObjectZodSchema = makeSchema();
