import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClassificationWhereUniqueInputObjectSchema as ClassificationWhereUniqueInputObjectSchema } from './ClassificationWhereUniqueInput.schema';
import { ClassificationCreateWithoutOccurencesInputObjectSchema as ClassificationCreateWithoutOccurencesInputObjectSchema } from './ClassificationCreateWithoutOccurencesInput.schema';
import { ClassificationUncheckedCreateWithoutOccurencesInputObjectSchema as ClassificationUncheckedCreateWithoutOccurencesInputObjectSchema } from './ClassificationUncheckedCreateWithoutOccurencesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClassificationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ClassificationCreateWithoutOccurencesInputObjectSchema), z.lazy(() => ClassificationUncheckedCreateWithoutOccurencesInputObjectSchema)])
}).strict();
export const ClassificationCreateOrConnectWithoutOccurencesInputObjectSchema: z.ZodType<Prisma.ClassificationCreateOrConnectWithoutOccurencesInput> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationCreateOrConnectWithoutOccurencesInput>;
export const ClassificationCreateOrConnectWithoutOccurencesInputObjectZodSchema = makeSchema();
