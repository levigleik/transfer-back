import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './VehicleWhereUniqueInput.schema';
import { VehicleUpdateWithoutGasInputObjectSchema as VehicleUpdateWithoutGasInputObjectSchema } from './VehicleUpdateWithoutGasInput.schema';
import { VehicleUncheckedUpdateWithoutGasInputObjectSchema as VehicleUncheckedUpdateWithoutGasInputObjectSchema } from './VehicleUncheckedUpdateWithoutGasInput.schema';
import { VehicleCreateWithoutGasInputObjectSchema as VehicleCreateWithoutGasInputObjectSchema } from './VehicleCreateWithoutGasInput.schema';
import { VehicleUncheckedCreateWithoutGasInputObjectSchema as VehicleUncheckedCreateWithoutGasInputObjectSchema } from './VehicleUncheckedCreateWithoutGasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => VehicleUpdateWithoutGasInputObjectSchema), z.lazy(() => VehicleUncheckedUpdateWithoutGasInputObjectSchema)]),
  create: z.union([z.lazy(() => VehicleCreateWithoutGasInputObjectSchema), z.lazy(() => VehicleUncheckedCreateWithoutGasInputObjectSchema)])
}).strict();
export const VehicleUpsertWithWhereUniqueWithoutGasInputObjectSchema: z.ZodType<Prisma.VehicleUpsertWithWhereUniqueWithoutGasInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleUpsertWithWhereUniqueWithoutGasInput>;
export const VehicleUpsertWithWhereUniqueWithoutGasInputObjectZodSchema = makeSchema();
