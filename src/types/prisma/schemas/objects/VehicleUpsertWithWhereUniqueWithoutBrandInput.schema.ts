import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './VehicleWhereUniqueInput.schema';
import { VehicleUpdateWithoutBrandInputObjectSchema as VehicleUpdateWithoutBrandInputObjectSchema } from './VehicleUpdateWithoutBrandInput.schema';
import { VehicleUncheckedUpdateWithoutBrandInputObjectSchema as VehicleUncheckedUpdateWithoutBrandInputObjectSchema } from './VehicleUncheckedUpdateWithoutBrandInput.schema';
import { VehicleCreateWithoutBrandInputObjectSchema as VehicleCreateWithoutBrandInputObjectSchema } from './VehicleCreateWithoutBrandInput.schema';
import { VehicleUncheckedCreateWithoutBrandInputObjectSchema as VehicleUncheckedCreateWithoutBrandInputObjectSchema } from './VehicleUncheckedCreateWithoutBrandInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => VehicleUpdateWithoutBrandInputObjectSchema), z.lazy(() => VehicleUncheckedUpdateWithoutBrandInputObjectSchema)]),
  create: z.union([z.lazy(() => VehicleCreateWithoutBrandInputObjectSchema), z.lazy(() => VehicleUncheckedCreateWithoutBrandInputObjectSchema)])
}).strict();
export const VehicleUpsertWithWhereUniqueWithoutBrandInputObjectSchema: z.ZodType<Prisma.VehicleUpsertWithWhereUniqueWithoutBrandInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleUpsertWithWhereUniqueWithoutBrandInput>;
export const VehicleUpsertWithWhereUniqueWithoutBrandInputObjectZodSchema = makeSchema();
