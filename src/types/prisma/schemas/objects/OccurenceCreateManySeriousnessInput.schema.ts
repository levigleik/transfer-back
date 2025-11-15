import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  date: z.coerce.date(),
  description: z.string(),
  classificationId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const OccurenceCreateManySeriousnessInputObjectSchema: z.ZodType<Prisma.OccurenceCreateManySeriousnessInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceCreateManySeriousnessInput>;
export const OccurenceCreateManySeriousnessInputObjectZodSchema = makeSchema();
