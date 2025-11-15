import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClassificationCreateWithoutOccurencesInputObjectSchema as ClassificationCreateWithoutOccurencesInputObjectSchema } from './ClassificationCreateWithoutOccurencesInput.schema';
import { ClassificationUncheckedCreateWithoutOccurencesInputObjectSchema as ClassificationUncheckedCreateWithoutOccurencesInputObjectSchema } from './ClassificationUncheckedCreateWithoutOccurencesInput.schema';
import { ClassificationCreateOrConnectWithoutOccurencesInputObjectSchema as ClassificationCreateOrConnectWithoutOccurencesInputObjectSchema } from './ClassificationCreateOrConnectWithoutOccurencesInput.schema';
import { ClassificationWhereUniqueInputObjectSchema as ClassificationWhereUniqueInputObjectSchema } from './ClassificationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ClassificationCreateWithoutOccurencesInputObjectSchema), z.lazy(() => ClassificationUncheckedCreateWithoutOccurencesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ClassificationCreateOrConnectWithoutOccurencesInputObjectSchema).optional(),
  connect: z.lazy(() => ClassificationWhereUniqueInputObjectSchema).optional()
}).strict();
export const ClassificationCreateNestedOneWithoutOccurencesInputObjectSchema: z.ZodType<Prisma.ClassificationCreateNestedOneWithoutOccurencesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationCreateNestedOneWithoutOccurencesInput>;
export const ClassificationCreateNestedOneWithoutOccurencesInputObjectZodSchema = makeSchema();
