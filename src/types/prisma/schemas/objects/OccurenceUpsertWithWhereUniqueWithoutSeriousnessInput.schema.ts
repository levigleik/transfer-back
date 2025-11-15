import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceWhereUniqueInputObjectSchema as OccurenceWhereUniqueInputObjectSchema } from './OccurenceWhereUniqueInput.schema';
import { OccurenceUpdateWithoutSeriousnessInputObjectSchema as OccurenceUpdateWithoutSeriousnessInputObjectSchema } from './OccurenceUpdateWithoutSeriousnessInput.schema';
import { OccurenceUncheckedUpdateWithoutSeriousnessInputObjectSchema as OccurenceUncheckedUpdateWithoutSeriousnessInputObjectSchema } from './OccurenceUncheckedUpdateWithoutSeriousnessInput.schema';
import { OccurenceCreateWithoutSeriousnessInputObjectSchema as OccurenceCreateWithoutSeriousnessInputObjectSchema } from './OccurenceCreateWithoutSeriousnessInput.schema';
import { OccurenceUncheckedCreateWithoutSeriousnessInputObjectSchema as OccurenceUncheckedCreateWithoutSeriousnessInputObjectSchema } from './OccurenceUncheckedCreateWithoutSeriousnessInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OccurenceWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OccurenceUpdateWithoutSeriousnessInputObjectSchema), z.lazy(() => OccurenceUncheckedUpdateWithoutSeriousnessInputObjectSchema)]),
  create: z.union([z.lazy(() => OccurenceCreateWithoutSeriousnessInputObjectSchema), z.lazy(() => OccurenceUncheckedCreateWithoutSeriousnessInputObjectSchema)])
}).strict();
export const OccurenceUpsertWithWhereUniqueWithoutSeriousnessInputObjectSchema: z.ZodType<Prisma.OccurenceUpsertWithWhereUniqueWithoutSeriousnessInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceUpsertWithWhereUniqueWithoutSeriousnessInput>;
export const OccurenceUpsertWithWhereUniqueWithoutSeriousnessInputObjectZodSchema = makeSchema();
