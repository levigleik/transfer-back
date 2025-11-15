import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeriousnessCreateNestedOneWithoutOccurencesInputObjectSchema as SeriousnessCreateNestedOneWithoutOccurencesInputObjectSchema } from './SeriousnessCreateNestedOneWithoutOccurencesInput.schema';
import { ClassificationCreateNestedOneWithoutOccurencesInputObjectSchema as ClassificationCreateNestedOneWithoutOccurencesInputObjectSchema } from './ClassificationCreateNestedOneWithoutOccurencesInput.schema'

const makeSchema = () => z.object({
  date: z.coerce.date(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  seriousness: z.lazy(() => SeriousnessCreateNestedOneWithoutOccurencesInputObjectSchema),
  classification: z.lazy(() => ClassificationCreateNestedOneWithoutOccurencesInputObjectSchema)
}).strict();
export const OccurenceCreateInputObjectSchema: z.ZodType<Prisma.OccurenceCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceCreateInput>;
export const OccurenceCreateInputObjectZodSchema = makeSchema();
