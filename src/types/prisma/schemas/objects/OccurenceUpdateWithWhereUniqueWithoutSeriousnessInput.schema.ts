import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceWhereUniqueInputObjectSchema as OccurenceWhereUniqueInputObjectSchema } from './OccurenceWhereUniqueInput.schema';
import { OccurenceUpdateWithoutSeriousnessInputObjectSchema as OccurenceUpdateWithoutSeriousnessInputObjectSchema } from './OccurenceUpdateWithoutSeriousnessInput.schema';
import { OccurenceUncheckedUpdateWithoutSeriousnessInputObjectSchema as OccurenceUncheckedUpdateWithoutSeriousnessInputObjectSchema } from './OccurenceUncheckedUpdateWithoutSeriousnessInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OccurenceWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OccurenceUpdateWithoutSeriousnessInputObjectSchema), z.lazy(() => OccurenceUncheckedUpdateWithoutSeriousnessInputObjectSchema)])
}).strict();
export const OccurenceUpdateWithWhereUniqueWithoutSeriousnessInputObjectSchema: z.ZodType<Prisma.OccurenceUpdateWithWhereUniqueWithoutSeriousnessInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceUpdateWithWhereUniqueWithoutSeriousnessInput>;
export const OccurenceUpdateWithWhereUniqueWithoutSeriousnessInputObjectZodSchema = makeSchema();
