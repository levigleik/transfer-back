import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceCreateWithoutSeriousnessInputObjectSchema as OccurenceCreateWithoutSeriousnessInputObjectSchema } from './OccurenceCreateWithoutSeriousnessInput.schema';
import { OccurenceUncheckedCreateWithoutSeriousnessInputObjectSchema as OccurenceUncheckedCreateWithoutSeriousnessInputObjectSchema } from './OccurenceUncheckedCreateWithoutSeriousnessInput.schema';
import { OccurenceCreateOrConnectWithoutSeriousnessInputObjectSchema as OccurenceCreateOrConnectWithoutSeriousnessInputObjectSchema } from './OccurenceCreateOrConnectWithoutSeriousnessInput.schema';
import { OccurenceCreateManySeriousnessInputEnvelopeObjectSchema as OccurenceCreateManySeriousnessInputEnvelopeObjectSchema } from './OccurenceCreateManySeriousnessInputEnvelope.schema';
import { OccurenceWhereUniqueInputObjectSchema as OccurenceWhereUniqueInputObjectSchema } from './OccurenceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OccurenceCreateWithoutSeriousnessInputObjectSchema), z.lazy(() => OccurenceCreateWithoutSeriousnessInputObjectSchema).array(), z.lazy(() => OccurenceUncheckedCreateWithoutSeriousnessInputObjectSchema), z.lazy(() => OccurenceUncheckedCreateWithoutSeriousnessInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OccurenceCreateOrConnectWithoutSeriousnessInputObjectSchema), z.lazy(() => OccurenceCreateOrConnectWithoutSeriousnessInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OccurenceCreateManySeriousnessInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OccurenceWhereUniqueInputObjectSchema), z.lazy(() => OccurenceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OccurenceUncheckedCreateNestedManyWithoutSeriousnessInputObjectSchema: z.ZodType<Prisma.OccurenceUncheckedCreateNestedManyWithoutSeriousnessInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceUncheckedCreateNestedManyWithoutSeriousnessInput>;
export const OccurenceUncheckedCreateNestedManyWithoutSeriousnessInputObjectZodSchema = makeSchema();
