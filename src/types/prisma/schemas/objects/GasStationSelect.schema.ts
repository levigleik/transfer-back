import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const GasStationSelectObjectSchema: z.ZodType<Prisma.GasStationSelect> = makeSchema() as unknown as z.ZodType<Prisma.GasStationSelect>;
export const GasStationSelectObjectZodSchema = makeSchema();
