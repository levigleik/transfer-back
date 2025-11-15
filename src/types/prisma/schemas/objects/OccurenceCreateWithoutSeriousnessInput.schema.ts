import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClassificationCreateNestedOneWithoutOccurencesInputObjectSchema as ClassificationCreateNestedOneWithoutOccurencesInputObjectSchema } from './ClassificationCreateNestedOneWithoutOccurencesInput.schema'

const makeSchema = () => z.object({
  date: z.coerce.date(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  classification: z.lazy(() => ClassificationCreateNestedOneWithoutOccurencesInputObjectSchema)
}).strict();
export const OccurenceCreateWithoutSeriousnessInputObjectSchema: z.ZodType<Prisma.OccurenceCreateWithoutSeriousnessInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceCreateWithoutSeriousnessInput>;
export const OccurenceCreateWithoutSeriousnessInputObjectZodSchema = makeSchema();
