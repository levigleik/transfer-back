import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasUpdateWithoutVehicleInputObjectSchema as GasUpdateWithoutVehicleInputObjectSchema } from './GasUpdateWithoutVehicleInput.schema';
import { GasUncheckedUpdateWithoutVehicleInputObjectSchema as GasUncheckedUpdateWithoutVehicleInputObjectSchema } from './GasUncheckedUpdateWithoutVehicleInput.schema';
import { GasCreateWithoutVehicleInputObjectSchema as GasCreateWithoutVehicleInputObjectSchema } from './GasCreateWithoutVehicleInput.schema';
import { GasUncheckedCreateWithoutVehicleInputObjectSchema as GasUncheckedCreateWithoutVehicleInputObjectSchema } from './GasUncheckedCreateWithoutVehicleInput.schema';
import { GasWhereInputObjectSchema as GasWhereInputObjectSchema } from './GasWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => GasUpdateWithoutVehicleInputObjectSchema), z.lazy(() => GasUncheckedUpdateWithoutVehicleInputObjectSchema)]),
  create: z.union([z.lazy(() => GasCreateWithoutVehicleInputObjectSchema), z.lazy(() => GasUncheckedCreateWithoutVehicleInputObjectSchema)]),
  where: z.lazy(() => GasWhereInputObjectSchema).optional()
}).strict();
export const GasUpsertWithoutVehicleInputObjectSchema: z.ZodType<Prisma.GasUpsertWithoutVehicleInput> = makeSchema() as unknown as z.ZodType<Prisma.GasUpsertWithoutVehicleInput>;
export const GasUpsertWithoutVehicleInputObjectZodSchema = makeSchema();
