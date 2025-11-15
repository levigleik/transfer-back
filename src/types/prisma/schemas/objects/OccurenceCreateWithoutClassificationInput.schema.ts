import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeriousnessCreateNestedOneWithoutOccurencesInputObjectSchema as SeriousnessCreateNestedOneWithoutOccurencesInputObjectSchema } from './SeriousnessCreateNestedOneWithoutOccurencesInput.schema'

const makeSchema = () => z.object({
  date: z.coerce.date(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  seriousness: z.lazy(() => SeriousnessCreateNestedOneWithoutOccurencesInputObjectSchema)
}).strict();
export const OccurenceCreateWithoutClassificationInputObjectSchema: z.ZodType<Prisma.OccurenceCreateWithoutClassificationInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceCreateWithoutClassificationInput>;
export const OccurenceCreateWithoutClassificationInputObjectZodSchema = makeSchema();
