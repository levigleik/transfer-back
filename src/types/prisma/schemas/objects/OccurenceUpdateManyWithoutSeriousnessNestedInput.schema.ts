import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceCreateWithoutSeriousnessInputObjectSchema as OccurenceCreateWithoutSeriousnessInputObjectSchema } from './OccurenceCreateWithoutSeriousnessInput.schema';
import { OccurenceUncheckedCreateWithoutSeriousnessInputObjectSchema as OccurenceUncheckedCreateWithoutSeriousnessInputObjectSchema } from './OccurenceUncheckedCreateWithoutSeriousnessInput.schema';
import { OccurenceCreateOrConnectWithoutSeriousnessInputObjectSchema as OccurenceCreateOrConnectWithoutSeriousnessInputObjectSchema } from './OccurenceCreateOrConnectWithoutSeriousnessInput.schema';
import { OccurenceUpsertWithWhereUniqueWithoutSeriousnessInputObjectSchema as OccurenceUpsertWithWhereUniqueWithoutSeriousnessInputObjectSchema } from './OccurenceUpsertWithWhereUniqueWithoutSeriousnessInput.schema';
import { OccurenceCreateManySeriousnessInputEnvelopeObjectSchema as OccurenceCreateManySeriousnessInputEnvelopeObjectSchema } from './OccurenceCreateManySeriousnessInputEnvelope.schema';
import { OccurenceWhereUniqueInputObjectSchema as OccurenceWhereUniqueInputObjectSchema } from './OccurenceWhereUniqueInput.schema';
import { OccurenceUpdateWithWhereUniqueWithoutSeriousnessInputObjectSchema as OccurenceUpdateWithWhereUniqueWithoutSeriousnessInputObjectSchema } from './OccurenceUpdateWithWhereUniqueWithoutSeriousnessInput.schema';
import { OccurenceUpdateManyWithWhereWithoutSeriousnessInputObjectSchema as OccurenceUpdateManyWithWhereWithoutSeriousnessInputObjectSchema } from './OccurenceUpdateManyWithWhereWithoutSeriousnessInput.schema';
import { OccurenceScalarWhereInputObjectSchema as OccurenceScalarWhereInputObjectSchema } from './OccurenceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OccurenceCreateWithoutSeriousnessInputObjectSchema), z.lazy(() => OccurenceCreateWithoutSeriousnessInputObjectSchema).array(), z.lazy(() => OccurenceUncheckedCreateWithoutSeriousnessInputObjectSchema), z.lazy(() => OccurenceUncheckedCreateWithoutSeriousnessInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OccurenceCreateOrConnectWithoutSeriousnessInputObjectSchema), z.lazy(() => OccurenceCreateOrConnectWithoutSeriousnessInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OccurenceUpsertWithWhereUniqueWithoutSeriousnessInputObjectSchema), z.lazy(() => OccurenceUpsertWithWhereUniqueWithoutSeriousnessInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OccurenceCreateManySeriousnessInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OccurenceWhereUniqueInputObjectSchema), z.lazy(() => OccurenceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OccurenceWhereUniqueInputObjectSchema), z.lazy(() => OccurenceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OccurenceWhereUniqueInputObjectSchema), z.lazy(() => OccurenceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OccurenceWhereUniqueInputObjectSchema), z.lazy(() => OccurenceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OccurenceUpdateWithWhereUniqueWithoutSeriousnessInputObjectSchema), z.lazy(() => OccurenceUpdateWithWhereUniqueWithoutSeriousnessInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OccurenceUpdateManyWithWhereWithoutSeriousnessInputObjectSchema), z.lazy(() => OccurenceUpdateManyWithWhereWithoutSeriousnessInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OccurenceScalarWhereInputObjectSchema), z.lazy(() => OccurenceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OccurenceUpdateManyWithoutSeriousnessNestedInputObjectSchema: z.ZodType<Prisma.OccurenceUpdateManyWithoutSeriousnessNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceUpdateManyWithoutSeriousnessNestedInput>;
export const OccurenceUpdateManyWithoutSeriousnessNestedInputObjectZodSchema = makeSchema();
