import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasWhereUniqueInputObjectSchema as GasWhereUniqueInputObjectSchema } from './GasWhereUniqueInput.schema';
import { GasCreateWithoutVehicleInputObjectSchema as GasCreateWithoutVehicleInputObjectSchema } from './GasCreateWithoutVehicleInput.schema';
import { GasUncheckedCreateWithoutVehicleInputObjectSchema as GasUncheckedCreateWithoutVehicleInputObjectSchema } from './GasUncheckedCreateWithoutVehicleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GasWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GasCreateWithoutVehicleInputObjectSchema), z.lazy(() => GasUncheckedCreateWithoutVehicleInputObjectSchema)])
}).strict();
export const GasCreateOrConnectWithoutVehicleInputObjectSchema: z.ZodType<Prisma.GasCreateOrConnectWithoutVehicleInput> = makeSchema() as unknown as z.ZodType<Prisma.GasCreateOrConnectWithoutVehicleInput>;
export const GasCreateOrConnectWithoutVehicleInputObjectZodSchema = makeSchema();
