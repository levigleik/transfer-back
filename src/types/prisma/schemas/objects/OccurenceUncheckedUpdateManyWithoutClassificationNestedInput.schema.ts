import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceCreateWithoutClassificationInputObjectSchema as OccurenceCreateWithoutClassificationInputObjectSchema } from './OccurenceCreateWithoutClassificationInput.schema';
import { OccurenceUncheckedCreateWithoutClassificationInputObjectSchema as OccurenceUncheckedCreateWithoutClassificationInputObjectSchema } from './OccurenceUncheckedCreateWithoutClassificationInput.schema';
import { OccurenceCreateOrConnectWithoutClassificationInputObjectSchema as OccurenceCreateOrConnectWithoutClassificationInputObjectSchema } from './OccurenceCreateOrConnectWithoutClassificationInput.schema';
import { OccurenceUpsertWithWhereUniqueWithoutClassificationInputObjectSchema as OccurenceUpsertWithWhereUniqueWithoutClassificationInputObjectSchema } from './OccurenceUpsertWithWhereUniqueWithoutClassificationInput.schema';
import { OccurenceCreateManyClassificationInputEnvelopeObjectSchema as OccurenceCreateManyClassificationInputEnvelopeObjectSchema } from './OccurenceCreateManyClassificationInputEnvelope.schema';
import { OccurenceWhereUniqueInputObjectSchema as OccurenceWhereUniqueInputObjectSchema } from './OccurenceWhereUniqueInput.schema';
import { OccurenceUpdateWithWhereUniqueWithoutClassificationInputObjectSchema as OccurenceUpdateWithWhereUniqueWithoutClassificationInputObjectSchema } from './OccurenceUpdateWithWhereUniqueWithoutClassificationInput.schema';
import { OccurenceUpdateManyWithWhereWithoutClassificationInputObjectSchema as OccurenceUpdateManyWithWhereWithoutClassificationInputObjectSchema } from './OccurenceUpdateManyWithWhereWithoutClassificationInput.schema';
import { OccurenceScalarWhereInputObjectSchema as OccurenceScalarWhereInputObjectSchema } from './OccurenceScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OccurenceCreateWithoutClassificationInputObjectSchema), z.lazy(() => OccurenceCreateWithoutClassificationInputObjectSchema).array(), z.lazy(() => OccurenceUncheckedCreateWithoutClassificationInputObjectSchema), z.lazy(() => OccurenceUncheckedCreateWithoutClassificationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OccurenceCreateOrConnectWithoutClassificationInputObjectSchema), z.lazy(() => OccurenceCreateOrConnectWithoutClassificationInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => OccurenceUpsertWithWhereUniqueWithoutClassificationInputObjectSchema), z.lazy(() => OccurenceUpsertWithWhereUniqueWithoutClassificationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OccurenceCreateManyClassificationInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => OccurenceWhereUniqueInputObjectSchema), z.lazy(() => OccurenceWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => OccurenceWhereUniqueInputObjectSchema), z.lazy(() => OccurenceWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => OccurenceWhereUniqueInputObjectSchema), z.lazy(() => OccurenceWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => OccurenceWhereUniqueInputObjectSchema), z.lazy(() => OccurenceWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => OccurenceUpdateWithWhereUniqueWithoutClassificationInputObjectSchema), z.lazy(() => OccurenceUpdateWithWhereUniqueWithoutClassificationInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => OccurenceUpdateManyWithWhereWithoutClassificationInputObjectSchema), z.lazy(() => OccurenceUpdateManyWithWhereWithoutClassificationInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => OccurenceScalarWhereInputObjectSchema), z.lazy(() => OccurenceScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const OccurenceUncheckedUpdateManyWithoutClassificationNestedInputObjectSchema: z.ZodType<Prisma.OccurenceUncheckedUpdateManyWithoutClassificationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceUncheckedUpdateManyWithoutClassificationNestedInput>;
export const OccurenceUncheckedUpdateManyWithoutClassificationNestedInputObjectZodSchema = makeSchema();
