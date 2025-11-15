import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceUncheckedCreateNestedManyWithoutClassificationInputObjectSchema as OccurenceUncheckedCreateNestedManyWithoutClassificationInputObjectSchema } from './OccurenceUncheckedCreateNestedManyWithoutClassificationInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  occurences: z.lazy(() => OccurenceUncheckedCreateNestedManyWithoutClassificationInputObjectSchema)
}).strict();
export const ClassificationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ClassificationUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationUncheckedCreateInput>;
export const ClassificationUncheckedCreateInputObjectZodSchema = makeSchema();
