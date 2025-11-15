import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceWhereUniqueInputObjectSchema as OccurenceWhereUniqueInputObjectSchema } from './OccurenceWhereUniqueInput.schema';
import { OccurenceCreateWithoutSeriousnessInputObjectSchema as OccurenceCreateWithoutSeriousnessInputObjectSchema } from './OccurenceCreateWithoutSeriousnessInput.schema';
import { OccurenceUncheckedCreateWithoutSeriousnessInputObjectSchema as OccurenceUncheckedCreateWithoutSeriousnessInputObjectSchema } from './OccurenceUncheckedCreateWithoutSeriousnessInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OccurenceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OccurenceCreateWithoutSeriousnessInputObjectSchema), z.lazy(() => OccurenceUncheckedCreateWithoutSeriousnessInputObjectSchema)])
}).strict();
export const OccurenceCreateOrConnectWithoutSeriousnessInputObjectSchema: z.ZodType<Prisma.OccurenceCreateOrConnectWithoutSeriousnessInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceCreateOrConnectWithoutSeriousnessInput>;
export const OccurenceCreateOrConnectWithoutSeriousnessInputObjectZodSchema = makeSchema();
