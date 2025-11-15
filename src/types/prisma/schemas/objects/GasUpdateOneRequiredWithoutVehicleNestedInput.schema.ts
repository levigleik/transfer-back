import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasCreateWithoutVehicleInputObjectSchema as GasCreateWithoutVehicleInputObjectSchema } from './GasCreateWithoutVehicleInput.schema';
import { GasUncheckedCreateWithoutVehicleInputObjectSchema as GasUncheckedCreateWithoutVehicleInputObjectSchema } from './GasUncheckedCreateWithoutVehicleInput.schema';
import { GasCreateOrConnectWithoutVehicleInputObjectSchema as GasCreateOrConnectWithoutVehicleInputObjectSchema } from './GasCreateOrConnectWithoutVehicleInput.schema';
import { GasUpsertWithoutVehicleInputObjectSchema as GasUpsertWithoutVehicleInputObjectSchema } from './GasUpsertWithoutVehicleInput.schema';
import { GasWhereUniqueInputObjectSchema as GasWhereUniqueInputObjectSchema } from './GasWhereUniqueInput.schema';
import { GasUpdateToOneWithWhereWithoutVehicleInputObjectSchema as GasUpdateToOneWithWhereWithoutVehicleInputObjectSchema } from './GasUpdateToOneWithWhereWithoutVehicleInput.schema';
import { GasUpdateWithoutVehicleInputObjectSchema as GasUpdateWithoutVehicleInputObjectSchema } from './GasUpdateWithoutVehicleInput.schema';
import { GasUncheckedUpdateWithoutVehicleInputObjectSchema as GasUncheckedUpdateWithoutVehicleInputObjectSchema } from './GasUncheckedUpdateWithoutVehicleInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GasCreateWithoutVehicleInputObjectSchema), z.lazy(() => GasUncheckedCreateWithoutVehicleInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GasCreateOrConnectWithoutVehicleInputObjectSchema).optional(),
  upsert: z.lazy(() => GasUpsertWithoutVehicleInputObjectSchema).optional(),
  connect: z.lazy(() => GasWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => GasUpdateToOneWithWhereWithoutVehicleInputObjectSchema), z.lazy(() => GasUpdateWithoutVehicleInputObjectSchema), z.lazy(() => GasUncheckedUpdateWithoutVehicleInputObjectSchema)]).optional()
}).strict();
export const GasUpdateOneRequiredWithoutVehicleNestedInputObjectSchema: z.ZodType<Prisma.GasUpdateOneRequiredWithoutVehicleNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GasUpdateOneRequiredWithoutVehicleNestedInput>;
export const GasUpdateOneRequiredWithoutVehicleNestedInputObjectZodSchema = makeSchema();
