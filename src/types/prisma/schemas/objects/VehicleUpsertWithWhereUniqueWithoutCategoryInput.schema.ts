import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './VehicleWhereUniqueInput.schema';
import { VehicleUpdateWithoutCategoryInputObjectSchema as VehicleUpdateWithoutCategoryInputObjectSchema } from './VehicleUpdateWithoutCategoryInput.schema';
import { VehicleUncheckedUpdateWithoutCategoryInputObjectSchema as VehicleUncheckedUpdateWithoutCategoryInputObjectSchema } from './VehicleUncheckedUpdateWithoutCategoryInput.schema';
import { VehicleCreateWithoutCategoryInputObjectSchema as VehicleCreateWithoutCategoryInputObjectSchema } from './VehicleCreateWithoutCategoryInput.schema';
import { VehicleUncheckedCreateWithoutCategoryInputObjectSchema as VehicleUncheckedCreateWithoutCategoryInputObjectSchema } from './VehicleUncheckedCreateWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => VehicleUpdateWithoutCategoryInputObjectSchema), z.lazy(() => VehicleUncheckedUpdateWithoutCategoryInputObjectSchema)]),
  create: z.union([z.lazy(() => VehicleCreateWithoutCategoryInputObjectSchema), z.lazy(() => VehicleUncheckedCreateWithoutCategoryInputObjectSchema)])
}).strict();
export const VehicleUpsertWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<Prisma.VehicleUpsertWithWhereUniqueWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleUpsertWithWhereUniqueWithoutCategoryInput>;
export const VehicleUpsertWithWhereUniqueWithoutCategoryInputObjectZodSchema = makeSchema();
