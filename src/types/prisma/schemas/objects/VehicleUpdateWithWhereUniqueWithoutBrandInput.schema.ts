import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './VehicleWhereUniqueInput.schema';
import { VehicleUpdateWithoutBrandInputObjectSchema as VehicleUpdateWithoutBrandInputObjectSchema } from './VehicleUpdateWithoutBrandInput.schema';
import { VehicleUncheckedUpdateWithoutBrandInputObjectSchema as VehicleUncheckedUpdateWithoutBrandInputObjectSchema } from './VehicleUncheckedUpdateWithoutBrandInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => VehicleUpdateWithoutBrandInputObjectSchema), z.lazy(() => VehicleUncheckedUpdateWithoutBrandInputObjectSchema)])
}).strict();
export const VehicleUpdateWithWhereUniqueWithoutBrandInputObjectSchema: z.ZodType<Prisma.VehicleUpdateWithWhereUniqueWithoutBrandInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleUpdateWithWhereUniqueWithoutBrandInput>;
export const VehicleUpdateWithWhereUniqueWithoutBrandInputObjectZodSchema = makeSchema();
