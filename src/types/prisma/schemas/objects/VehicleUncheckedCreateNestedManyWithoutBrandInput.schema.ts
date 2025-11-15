import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleCreateWithoutBrandInputObjectSchema as VehicleCreateWithoutBrandInputObjectSchema } from './VehicleCreateWithoutBrandInput.schema';
import { VehicleUncheckedCreateWithoutBrandInputObjectSchema as VehicleUncheckedCreateWithoutBrandInputObjectSchema } from './VehicleUncheckedCreateWithoutBrandInput.schema';
import { VehicleCreateOrConnectWithoutBrandInputObjectSchema as VehicleCreateOrConnectWithoutBrandInputObjectSchema } from './VehicleCreateOrConnectWithoutBrandInput.schema';
import { VehicleCreateManyBrandInputEnvelopeObjectSchema as VehicleCreateManyBrandInputEnvelopeObjectSchema } from './VehicleCreateManyBrandInputEnvelope.schema';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './VehicleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VehicleCreateWithoutBrandInputObjectSchema), z.lazy(() => VehicleCreateWithoutBrandInputObjectSchema).array(), z.lazy(() => VehicleUncheckedCreateWithoutBrandInputObjectSchema), z.lazy(() => VehicleUncheckedCreateWithoutBrandInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VehicleCreateOrConnectWithoutBrandInputObjectSchema), z.lazy(() => VehicleCreateOrConnectWithoutBrandInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VehicleCreateManyBrandInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const VehicleUncheckedCreateNestedManyWithoutBrandInputObjectSchema: z.ZodType<Prisma.VehicleUncheckedCreateNestedManyWithoutBrandInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleUncheckedCreateNestedManyWithoutBrandInput>;
export const VehicleUncheckedCreateNestedManyWithoutBrandInputObjectZodSchema = makeSchema();
