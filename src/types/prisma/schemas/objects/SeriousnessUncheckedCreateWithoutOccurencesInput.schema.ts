import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  level: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const SeriousnessUncheckedCreateWithoutOccurencesInputObjectSchema: z.ZodType<Prisma.SeriousnessUncheckedCreateWithoutOccurencesInput> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessUncheckedCreateWithoutOccurencesInput>;
export const SeriousnessUncheckedCreateWithoutOccurencesInputObjectZodSchema = makeSchema();
