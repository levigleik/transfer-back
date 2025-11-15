import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasWhereInputObjectSchema as GasWhereInputObjectSchema } from './GasWhereInput.schema';
import { GasUpdateWithoutVehicleInputObjectSchema as GasUpdateWithoutVehicleInputObjectSchema } from './GasUpdateWithoutVehicleInput.schema';
import { GasUncheckedUpdateWithoutVehicleInputObjectSchema as GasUncheckedUpdateWithoutVehicleInputObjectSchema } from './GasUncheckedUpdateWithoutVehicleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GasWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => GasUpdateWithoutVehicleInputObjectSchema), z.lazy(() => GasUncheckedUpdateWithoutVehicleInputObjectSchema)])
}).strict();
export const GasUpdateToOneWithWhereWithoutVehicleInputObjectSchema: z.ZodType<Prisma.GasUpdateToOneWithWhereWithoutVehicleInput> = makeSchema() as unknown as z.ZodType<Prisma.GasUpdateToOneWithWhereWithoutVehicleInput>;
export const GasUpdateToOneWithWhereWithoutVehicleInputObjectZodSchema = makeSchema();
