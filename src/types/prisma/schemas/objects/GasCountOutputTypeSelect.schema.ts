import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  vehicle: z.boolean().optional(),
  gasSupplies: z.boolean().optional()
}).strict();
export const GasCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.GasCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.GasCountOutputTypeSelect>;
export const GasCountOutputTypeSelectObjectZodSchema = makeSchema();
