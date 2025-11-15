import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleCreateWithoutBrandInputObjectSchema as VehicleCreateWithoutBrandInputObjectSchema } from './VehicleCreateWithoutBrandInput.schema';
import { VehicleUncheckedCreateWithoutBrandInputObjectSchema as VehicleUncheckedCreateWithoutBrandInputObjectSchema } from './VehicleUncheckedCreateWithoutBrandInput.schema';
import { VehicleCreateOrConnectWithoutBrandInputObjectSchema as VehicleCreateOrConnectWithoutBrandInputObjectSchema } from './VehicleCreateOrConnectWithoutBrandInput.schema';
import { VehicleUpsertWithWhereUniqueWithoutBrandInputObjectSchema as VehicleUpsertWithWhereUniqueWithoutBrandInputObjectSchema } from './VehicleUpsertWithWhereUniqueWithoutBrandInput.schema';
import { VehicleCreateManyBrandInputEnvelopeObjectSchema as VehicleCreateManyBrandInputEnvelopeObjectSchema } from './VehicleCreateManyBrandInputEnvelope.schema';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './VehicleWhereUniqueInput.schema';
import { VehicleUpdateWithWhereUniqueWithoutBrandInputObjectSchema as VehicleUpdateWithWhereUniqueWithoutBrandInputObjectSchema } from './VehicleUpdateWithWhereUniqueWithoutBrandInput.schema';
import { VehicleUpdateManyWithWhereWithoutBrandInputObjectSchema as VehicleUpdateManyWithWhereWithoutBrandInputObjectSchema } from './VehicleUpdateManyWithWhereWithoutBrandInput.schema';
import { VehicleScalarWhereInputObjectSchema as VehicleScalarWhereInputObjectSchema } from './VehicleScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VehicleCreateWithoutBrandInputObjectSchema), z.lazy(() => VehicleCreateWithoutBrandInputObjectSchema).array(), z.lazy(() => VehicleUncheckedCreateWithoutBrandInputObjectSchema), z.lazy(() => VehicleUncheckedCreateWithoutBrandInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VehicleCreateOrConnectWithoutBrandInputObjectSchema), z.lazy(() => VehicleCreateOrConnectWithoutBrandInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => VehicleUpsertWithWhereUniqueWithoutBrandInputObjectSchema), z.lazy(() => VehicleUpsertWithWhereUniqueWithoutBrandInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VehicleCreateManyBrandInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => VehicleUpdateWithWhereUniqueWithoutBrandInputObjectSchema), z.lazy(() => VehicleUpdateWithWhereUniqueWithoutBrandInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => VehicleUpdateManyWithWhereWithoutBrandInputObjectSchema), z.lazy(() => VehicleUpdateManyWithWhereWithoutBrandInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => VehicleScalarWhereInputObjectSchema), z.lazy(() => VehicleScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const VehicleUncheckedUpdateManyWithoutBrandNestedInputObjectSchema: z.ZodType<Prisma.VehicleUncheckedUpdateManyWithoutBrandNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleUncheckedUpdateManyWithoutBrandNestedInput>;
export const VehicleUncheckedUpdateManyWithoutBrandNestedInputObjectZodSchema = makeSchema();
