import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  level: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const SeriousnessCreateWithoutOccurencesInputObjectSchema: z.ZodType<Prisma.SeriousnessCreateWithoutOccurencesInput> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessCreateWithoutOccurencesInput>;
export const SeriousnessCreateWithoutOccurencesInputObjectZodSchema = makeSchema();
