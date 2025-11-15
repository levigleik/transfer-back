import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceWhereUniqueInputObjectSchema as OccurenceWhereUniqueInputObjectSchema } from './OccurenceWhereUniqueInput.schema';
import { OccurenceUpdateWithoutClassificationInputObjectSchema as OccurenceUpdateWithoutClassificationInputObjectSchema } from './OccurenceUpdateWithoutClassificationInput.schema';
import { OccurenceUncheckedUpdateWithoutClassificationInputObjectSchema as OccurenceUncheckedUpdateWithoutClassificationInputObjectSchema } from './OccurenceUncheckedUpdateWithoutClassificationInput.schema';
import { OccurenceCreateWithoutClassificationInputObjectSchema as OccurenceCreateWithoutClassificationInputObjectSchema } from './OccurenceCreateWithoutClassificationInput.schema';
import { OccurenceUncheckedCreateWithoutClassificationInputObjectSchema as OccurenceUncheckedCreateWithoutClassificationInputObjectSchema } from './OccurenceUncheckedCreateWithoutClassificationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OccurenceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OccurenceUpdateWithoutClassificationInputObjectSchema), z.lazy(() => OccurenceUncheckedUpdateWithoutClassificationInputObjectSchema)]),
  create: z.union([z.lazy(() => OccurenceCreateWithoutClassificationInputObjectSchema), z.lazy(() => OccurenceUncheckedCreateWithoutClassificationInputObjectSchema)])
}).strict();
export const OccurenceUpsertWithWhereUniqueWithoutClassificationInputObjectSchema: z.ZodType<Prisma.OccurenceUpsertWithWhereUniqueWithoutClassificationInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceUpsertWithWhereUniqueWithoutClassificationInput>;
export const OccurenceUpsertWithWhereUniqueWithoutClassificationInputObjectZodSchema = makeSchema();
