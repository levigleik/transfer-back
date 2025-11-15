import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClassificationWhereInputObjectSchema as ClassificationWhereInputObjectSchema } from './ClassificationWhereInput.schema';
import { ClassificationUpdateWithoutOccurencesInputObjectSchema as ClassificationUpdateWithoutOccurencesInputObjectSchema } from './ClassificationUpdateWithoutOccurencesInput.schema';
import { ClassificationUncheckedUpdateWithoutOccurencesInputObjectSchema as ClassificationUncheckedUpdateWithoutOccurencesInputObjectSchema } from './ClassificationUncheckedUpdateWithoutOccurencesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClassificationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ClassificationUpdateWithoutOccurencesInputObjectSchema), z.lazy(() => ClassificationUncheckedUpdateWithoutOccurencesInputObjectSchema)])
}).strict();
export const ClassificationUpdateToOneWithWhereWithoutOccurencesInputObjectSchema: z.ZodType<Prisma.ClassificationUpdateToOneWithWhereWithoutOccurencesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationUpdateToOneWithWhereWithoutOccurencesInput>;
export const ClassificationUpdateToOneWithWhereWithoutOccurencesInputObjectZodSchema = makeSchema();
