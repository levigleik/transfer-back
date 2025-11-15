import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClassificationCreateWithoutOccurencesInputObjectSchema as ClassificationCreateWithoutOccurencesInputObjectSchema } from './ClassificationCreateWithoutOccurencesInput.schema';
import { ClassificationUncheckedCreateWithoutOccurencesInputObjectSchema as ClassificationUncheckedCreateWithoutOccurencesInputObjectSchema } from './ClassificationUncheckedCreateWithoutOccurencesInput.schema';
import { ClassificationCreateOrConnectWithoutOccurencesInputObjectSchema as ClassificationCreateOrConnectWithoutOccurencesInputObjectSchema } from './ClassificationCreateOrConnectWithoutOccurencesInput.schema';
import { ClassificationUpsertWithoutOccurencesInputObjectSchema as ClassificationUpsertWithoutOccurencesInputObjectSchema } from './ClassificationUpsertWithoutOccurencesInput.schema';
import { ClassificationWhereUniqueInputObjectSchema as ClassificationWhereUniqueInputObjectSchema } from './ClassificationWhereUniqueInput.schema';
import { ClassificationUpdateToOneWithWhereWithoutOccurencesInputObjectSchema as ClassificationUpdateToOneWithWhereWithoutOccurencesInputObjectSchema } from './ClassificationUpdateToOneWithWhereWithoutOccurencesInput.schema';
import { ClassificationUpdateWithoutOccurencesInputObjectSchema as ClassificationUpdateWithoutOccurencesInputObjectSchema } from './ClassificationUpdateWithoutOccurencesInput.schema';
import { ClassificationUncheckedUpdateWithoutOccurencesInputObjectSchema as ClassificationUncheckedUpdateWithoutOccurencesInputObjectSchema } from './ClassificationUncheckedUpdateWithoutOccurencesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClassificationCreateWithoutOccurencesInputObjectSchema), z.lazy(() => ClassificationUncheckedCreateWithoutOccurencesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClassificationCreateOrConnectWithoutOccurencesInputObjectSchema).optional(),
  upsert: z.lazy(() => ClassificationUpsertWithoutOccurencesInputObjectSchema).optional(),
  connect: z.lazy(() => ClassificationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ClassificationUpdateToOneWithWhereWithoutOccurencesInputObjectSchema), z.lazy(() => ClassificationUpdateWithoutOccurencesInputObjectSchema), z.lazy(() => ClassificationUncheckedUpdateWithoutOccurencesInputObjectSchema)]).optional()
}).strict();
export const ClassificationUpdateOneRequiredWithoutOccurencesNestedInputObjectSchema: z.ZodType<Prisma.ClassificationUpdateOneRequiredWithoutOccurencesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationUpdateOneRequiredWithoutOccurencesNestedInput>;
export const ClassificationUpdateOneRequiredWithoutOccurencesNestedInputObjectZodSchema = makeSchema();
