import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceWhereUniqueInputObjectSchema as OccurenceWhereUniqueInputObjectSchema } from './OccurenceWhereUniqueInput.schema';
import { OccurenceUpdateWithoutClassificationInputObjectSchema as OccurenceUpdateWithoutClassificationInputObjectSchema } from './OccurenceUpdateWithoutClassificationInput.schema';
import { OccurenceUncheckedUpdateWithoutClassificationInputObjectSchema as OccurenceUncheckedUpdateWithoutClassificationInputObjectSchema } from './OccurenceUncheckedUpdateWithoutClassificationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OccurenceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OccurenceUpdateWithoutClassificationInputObjectSchema), z.lazy(() => OccurenceUncheckedUpdateWithoutClassificationInputObjectSchema)])
}).strict();
export const OccurenceUpdateWithWhereUniqueWithoutClassificationInputObjectSchema: z.ZodType<Prisma.OccurenceUpdateWithWhereUniqueWithoutClassificationInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceUpdateWithWhereUniqueWithoutClassificationInput>;
export const OccurenceUpdateWithWhereUniqueWithoutClassificationInputObjectZodSchema = makeSchema();
