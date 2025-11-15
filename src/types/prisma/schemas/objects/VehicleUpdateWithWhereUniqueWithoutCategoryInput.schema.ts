import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './VehicleWhereUniqueInput.schema';
import { VehicleUpdateWithoutCategoryInputObjectSchema as VehicleUpdateWithoutCategoryInputObjectSchema } from './VehicleUpdateWithoutCategoryInput.schema';
import { VehicleUncheckedUpdateWithoutCategoryInputObjectSchema as VehicleUncheckedUpdateWithoutCategoryInputObjectSchema } from './VehicleUncheckedUpdateWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => VehicleUpdateWithoutCategoryInputObjectSchema), z.lazy(() => VehicleUncheckedUpdateWithoutCategoryInputObjectSchema)])
}).strict();
export const VehicleUpdateWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<Prisma.VehicleUpdateWithWhereUniqueWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleUpdateWithWhereUniqueWithoutCategoryInput>;
export const VehicleUpdateWithWhereUniqueWithoutCategoryInputObjectZodSchema = makeSchema();
