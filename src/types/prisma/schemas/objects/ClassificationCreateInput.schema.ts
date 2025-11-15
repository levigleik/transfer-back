import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceCreateNestedManyWithoutClassificationInputObjectSchema as OccurenceCreateNestedManyWithoutClassificationInputObjectSchema } from './OccurenceCreateNestedManyWithoutClassificationInput.schema'

const makeSchema = () => z.object({
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  occurences: z.lazy(() => OccurenceCreateNestedManyWithoutClassificationInputObjectSchema)
}).strict();
export const ClassificationCreateInputObjectSchema: z.ZodType<Prisma.ClassificationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationCreateInput>;
export const ClassificationCreateInputObjectZodSchema = makeSchema();
