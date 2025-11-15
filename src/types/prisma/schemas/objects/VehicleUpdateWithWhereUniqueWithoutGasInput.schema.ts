import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './VehicleWhereUniqueInput.schema';
import { VehicleUpdateWithoutGasInputObjectSchema as VehicleUpdateWithoutGasInputObjectSchema } from './VehicleUpdateWithoutGasInput.schema';
import { VehicleUncheckedUpdateWithoutGasInputObjectSchema as VehicleUncheckedUpdateWithoutGasInputObjectSchema } from './VehicleUncheckedUpdateWithoutGasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => VehicleUpdateWithoutGasInputObjectSchema), z.lazy(() => VehicleUncheckedUpdateWithoutGasInputObjectSchema)])
}).strict();
export const VehicleUpdateWithWhereUniqueWithoutGasInputObjectSchema: z.ZodType<Prisma.VehicleUpdateWithWhereUniqueWithoutGasInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleUpdateWithWhereUniqueWithoutGasInput>;
export const VehicleUpdateWithWhereUniqueWithoutGasInputObjectZodSchema = makeSchema();
