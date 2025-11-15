import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ClassificationCreateWithoutOccurencesInputObjectSchema: z.ZodType<Prisma.ClassificationCreateWithoutOccurencesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationCreateWithoutOccurencesInput>;
export const ClassificationCreateWithoutOccurencesInputObjectZodSchema = makeSchema();
