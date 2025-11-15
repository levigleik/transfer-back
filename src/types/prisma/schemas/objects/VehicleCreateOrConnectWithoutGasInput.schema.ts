import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './VehicleWhereUniqueInput.schema';
import { VehicleCreateWithoutGasInputObjectSchema as VehicleCreateWithoutGasInputObjectSchema } from './VehicleCreateWithoutGasInput.schema';
import { VehicleUncheckedCreateWithoutGasInputObjectSchema as VehicleUncheckedCreateWithoutGasInputObjectSchema } from './VehicleUncheckedCreateWithoutGasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VehicleCreateWithoutGasInputObjectSchema), z.lazy(() => VehicleUncheckedCreateWithoutGasInputObjectSchema)])
}).strict();
export const VehicleCreateOrConnectWithoutGasInputObjectSchema: z.ZodType<Prisma.VehicleCreateOrConnectWithoutGasInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleCreateOrConnectWithoutGasInput>;
export const VehicleCreateOrConnectWithoutGasInputObjectZodSchema = makeSchema();
