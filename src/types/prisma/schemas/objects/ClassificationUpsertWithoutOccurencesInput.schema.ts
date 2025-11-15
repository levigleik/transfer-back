import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClassificationUpdateWithoutOccurencesInputObjectSchema as ClassificationUpdateWithoutOccurencesInputObjectSchema } from './ClassificationUpdateWithoutOccurencesInput.schema';
import { ClassificationUncheckedUpdateWithoutOccurencesInputObjectSchema as ClassificationUncheckedUpdateWithoutOccurencesInputObjectSchema } from './ClassificationUncheckedUpdateWithoutOccurencesInput.schema';
import { ClassificationCreateWithoutOccurencesInputObjectSchema as ClassificationCreateWithoutOccurencesInputObjectSchema } from './ClassificationCreateWithoutOccurencesInput.schema';
import { ClassificationUncheckedCreateWithoutOccurencesInputObjectSchema as ClassificationUncheckedCreateWithoutOccurencesInputObjectSchema } from './ClassificationUncheckedCreateWithoutOccurencesInput.schema';
import { ClassificationWhereInputObjectSchema as ClassificationWhereInputObjectSchema } from './ClassificationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ClassificationUpdateWithoutOccurencesInputObjectSchema), z.lazy(() => ClassificationUncheckedUpdateWithoutOccurencesInputObjectSchema)]),
  create: z.union([z.lazy(() => ClassificationCreateWithoutOccurencesInputObjectSchema), z.lazy(() => ClassificationUncheckedCreateWithoutOccurencesInputObjectSchema)]),
  where: z.lazy(() => ClassificationWhereInputObjectSchema).optional()
}).strict();
export const ClassificationUpsertWithoutOccurencesInputObjectSchema: z.ZodType<Prisma.ClassificationUpsertWithoutOccurencesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationUpsertWithoutOccurencesInput>;
export const ClassificationUpsertWithoutOccurencesInputObjectZodSchema = makeSchema();
