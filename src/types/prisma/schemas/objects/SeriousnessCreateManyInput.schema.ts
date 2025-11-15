import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  level: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const SeriousnessCreateManyInputObjectSchema: z.ZodType<Prisma.SeriousnessCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessCreateManyInput>;
export const SeriousnessCreateManyInputObjectZodSchema = makeSchema();
