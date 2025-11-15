import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleCreateWithoutGasInputObjectSchema as VehicleCreateWithoutGasInputObjectSchema } from './VehicleCreateWithoutGasInput.schema';
import { VehicleUncheckedCreateWithoutGasInputObjectSchema as VehicleUncheckedCreateWithoutGasInputObjectSchema } from './VehicleUncheckedCreateWithoutGasInput.schema';
import { VehicleCreateOrConnectWithoutGasInputObjectSchema as VehicleCreateOrConnectWithoutGasInputObjectSchema } from './VehicleCreateOrConnectWithoutGasInput.schema';
import { VehicleCreateManyGasInputEnvelopeObjectSchema as VehicleCreateManyGasInputEnvelopeObjectSchema } from './VehicleCreateManyGasInputEnvelope.schema';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './VehicleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VehicleCreateWithoutGasInputObjectSchema), z.lazy(() => VehicleCreateWithoutGasInputObjectSchema).array(), z.lazy(() => VehicleUncheckedCreateWithoutGasInputObjectSchema), z.lazy(() => VehicleUncheckedCreateWithoutGasInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VehicleCreateOrConnectWithoutGasInputObjectSchema), z.lazy(() => VehicleCreateOrConnectWithoutGasInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VehicleCreateManyGasInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const VehicleUncheckedCreateNestedManyWithoutGasInputObjectSchema: z.ZodType<Prisma.VehicleUncheckedCreateNestedManyWithoutGasInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleUncheckedCreateNestedManyWithoutGasInput>;
export const VehicleUncheckedCreateNestedManyWithoutGasInputObjectZodSchema = makeSchema();
