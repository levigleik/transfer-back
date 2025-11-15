import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleCreateWithoutGasInputObjectSchema as VehicleCreateWithoutGasInputObjectSchema } from './VehicleCreateWithoutGasInput.schema';
import { VehicleUncheckedCreateWithoutGasInputObjectSchema as VehicleUncheckedCreateWithoutGasInputObjectSchema } from './VehicleUncheckedCreateWithoutGasInput.schema';
import { VehicleCreateOrConnectWithoutGasInputObjectSchema as VehicleCreateOrConnectWithoutGasInputObjectSchema } from './VehicleCreateOrConnectWithoutGasInput.schema';
import { VehicleUpsertWithWhereUniqueWithoutGasInputObjectSchema as VehicleUpsertWithWhereUniqueWithoutGasInputObjectSchema } from './VehicleUpsertWithWhereUniqueWithoutGasInput.schema';
import { VehicleCreateManyGasInputEnvelopeObjectSchema as VehicleCreateManyGasInputEnvelopeObjectSchema } from './VehicleCreateManyGasInputEnvelope.schema';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './VehicleWhereUniqueInput.schema';
import { VehicleUpdateWithWhereUniqueWithoutGasInputObjectSchema as VehicleUpdateWithWhereUniqueWithoutGasInputObjectSchema } from './VehicleUpdateWithWhereUniqueWithoutGasInput.schema';
import { VehicleUpdateManyWithWhereWithoutGasInputObjectSchema as VehicleUpdateManyWithWhereWithoutGasInputObjectSchema } from './VehicleUpdateManyWithWhereWithoutGasInput.schema';
import { VehicleScalarWhereInputObjectSchema as VehicleScalarWhereInputObjectSchema } from './VehicleScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VehicleCreateWithoutGasInputObjectSchema), z.lazy(() => VehicleCreateWithoutGasInputObjectSchema).array(), z.lazy(() => VehicleUncheckedCreateWithoutGasInputObjectSchema), z.lazy(() => VehicleUncheckedCreateWithoutGasInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VehicleCreateOrConnectWithoutGasInputObjectSchema), z.lazy(() => VehicleCreateOrConnectWithoutGasInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => VehicleUpsertWithWhereUniqueWithoutGasInputObjectSchema), z.lazy(() => VehicleUpsertWithWhereUniqueWithoutGasInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VehicleCreateManyGasInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => VehicleUpdateWithWhereUniqueWithoutGasInputObjectSchema), z.lazy(() => VehicleUpdateWithWhereUniqueWithoutGasInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => VehicleUpdateManyWithWhereWithoutGasInputObjectSchema), z.lazy(() => VehicleUpdateManyWithWhereWithoutGasInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => VehicleScalarWhereInputObjectSchema), z.lazy(() => VehicleScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const VehicleUpdateManyWithoutGasNestedInputObjectSchema: z.ZodType<Prisma.VehicleUpdateManyWithoutGasNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleUpdateManyWithoutGasNestedInput>;
export const VehicleUpdateManyWithoutGasNestedInputObjectZodSchema = makeSchema();
