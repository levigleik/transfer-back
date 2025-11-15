import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasCreateWithoutVehicleInputObjectSchema as GasCreateWithoutVehicleInputObjectSchema } from './GasCreateWithoutVehicleInput.schema';
import { GasUncheckedCreateWithoutVehicleInputObjectSchema as GasUncheckedCreateWithoutVehicleInputObjectSchema } from './GasUncheckedCreateWithoutVehicleInput.schema';
import { GasCreateOrConnectWithoutVehicleInputObjectSchema as GasCreateOrConnectWithoutVehicleInputObjectSchema } from './GasCreateOrConnectWithoutVehicleInput.schema';
import { GasWhereUniqueInputObjectSchema as GasWhereUniqueInputObjectSchema } from './GasWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GasCreateWithoutVehicleInputObjectSchema), z.lazy(() => GasUncheckedCreateWithoutVehicleInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GasCreateOrConnectWithoutVehicleInputObjectSchema).optional(),
  connect: z.lazy(() => GasWhereUniqueInputObjectSchema).optional()
}).strict();
export const GasCreateNestedOneWithoutVehicleInputObjectSchema: z.ZodType<Prisma.GasCreateNestedOneWithoutVehicleInput> = makeSchema() as unknown as z.ZodType<Prisma.GasCreateNestedOneWithoutVehicleInput>;
export const GasCreateNestedOneWithoutVehicleInputObjectZodSchema = makeSchema();
