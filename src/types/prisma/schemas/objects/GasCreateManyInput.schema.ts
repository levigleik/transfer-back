import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  type: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const GasCreateManyInputObjectSchema: z.ZodType<Prisma.GasCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.GasCreateManyInput>;
export const GasCreateManyInputObjectZodSchema = makeSchema();
