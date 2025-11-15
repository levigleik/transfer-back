import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasSupplyCreateWithoutGasInputObjectSchema as GasSupplyCreateWithoutGasInputObjectSchema } from './GasSupplyCreateWithoutGasInput.schema';
import { GasSupplyUncheckedCreateWithoutGasInputObjectSchema as GasSupplyUncheckedCreateWithoutGasInputObjectSchema } from './GasSupplyUncheckedCreateWithoutGasInput.schema';
import { GasSupplyCreateOrConnectWithoutGasInputObjectSchema as GasSupplyCreateOrConnectWithoutGasInputObjectSchema } from './GasSupplyCreateOrConnectWithoutGasInput.schema';
import { GasSupplyUpsertWithWhereUniqueWithoutGasInputObjectSchema as GasSupplyUpsertWithWhereUniqueWithoutGasInputObjectSchema } from './GasSupplyUpsertWithWhereUniqueWithoutGasInput.schema';
import { GasSupplyCreateManyGasInputEnvelopeObjectSchema as GasSupplyCreateManyGasInputEnvelopeObjectSchema } from './GasSupplyCreateManyGasInputEnvelope.schema';
import { GasSupplyWhereUniqueInputObjectSchema as GasSupplyWhereUniqueInputObjectSchema } from './GasSupplyWhereUniqueInput.schema';
import { GasSupplyUpdateWithWhereUniqueWithoutGasInputObjectSchema as GasSupplyUpdateWithWhereUniqueWithoutGasInputObjectSchema } from './GasSupplyUpdateWithWhereUniqueWithoutGasInput.schema';
import { GasSupplyUpdateManyWithWhereWithoutGasInputObjectSchema as GasSupplyUpdateManyWithWhereWithoutGasInputObjectSchema } from './GasSupplyUpdateManyWithWhereWithoutGasInput.schema';
import { GasSupplyScalarWhereInputObjectSchema as GasSupplyScalarWhereInputObjectSchema } from './GasSupplyScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GasSupplyCreateWithoutGasInputObjectSchema), z.lazy(() => GasSupplyCreateWithoutGasInputObjectSchema).array(), z.lazy(() => GasSupplyUncheckedCreateWithoutGasInputObjectSchema), z.lazy(() => GasSupplyUncheckedCreateWithoutGasInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GasSupplyCreateOrConnectWithoutGasInputObjectSchema), z.lazy(() => GasSupplyCreateOrConnectWithoutGasInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => GasSupplyUpsertWithWhereUniqueWithoutGasInputObjectSchema), z.lazy(() => GasSupplyUpsertWithWhereUniqueWithoutGasInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GasSupplyCreateManyGasInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => GasSupplyWhereUniqueInputObjectSchema), z.lazy(() => GasSupplyWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => GasSupplyWhereUniqueInputObjectSchema), z.lazy(() => GasSupplyWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => GasSupplyWhereUniqueInputObjectSchema), z.lazy(() => GasSupplyWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => GasSupplyWhereUniqueInputObjectSchema), z.lazy(() => GasSupplyWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => GasSupplyUpdateWithWhereUniqueWithoutGasInputObjectSchema), z.lazy(() => GasSupplyUpdateWithWhereUniqueWithoutGasInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => GasSupplyUpdateManyWithWhereWithoutGasInputObjectSchema), z.lazy(() => GasSupplyUpdateManyWithWhereWithoutGasInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => GasSupplyScalarWhereInputObjectSchema), z.lazy(() => GasSupplyScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const GasSupplyUncheckedUpdateManyWithoutGasNestedInputObjectSchema: z.ZodType<Prisma.GasSupplyUncheckedUpdateManyWithoutGasNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyUncheckedUpdateManyWithoutGasNestedInput>;
export const GasSupplyUncheckedUpdateManyWithoutGasNestedInputObjectZodSchema = makeSchema();
