import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ClassificationUncheckedCreateWithoutOccurencesInputObjectSchema: z.ZodType<Prisma.ClassificationUncheckedCreateWithoutOccurencesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationUncheckedCreateWithoutOccurencesInput>;
export const ClassificationUncheckedCreateWithoutOccurencesInputObjectZodSchema = makeSchema();
