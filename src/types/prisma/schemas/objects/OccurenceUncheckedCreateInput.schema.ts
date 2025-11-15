import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  date: z.coerce.date(),
  description: z.string(),
  seriousnessId: z.number().int(),
  classificationId: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();
export const OccurenceUncheckedCreateInputObjectSchema: z.ZodType<Prisma.OccurenceUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceUncheckedCreateInput>;
export const OccurenceUncheckedCreateInputObjectZodSchema = makeSchema();
