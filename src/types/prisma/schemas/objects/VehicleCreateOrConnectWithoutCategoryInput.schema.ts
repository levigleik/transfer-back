import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './VehicleWhereUniqueInput.schema';
import { VehicleCreateWithoutCategoryInputObjectSchema as VehicleCreateWithoutCategoryInputObjectSchema } from './VehicleCreateWithoutCategoryInput.schema';
import { VehicleUncheckedCreateWithoutCategoryInputObjectSchema as VehicleUncheckedCreateWithoutCategoryInputObjectSchema } from './VehicleUncheckedCreateWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VehicleCreateWithoutCategoryInputObjectSchema), z.lazy(() => VehicleUncheckedCreateWithoutCategoryInputObjectSchema)])
}).strict();
export const VehicleCreateOrConnectWithoutCategoryInputObjectSchema: z.ZodType<Prisma.VehicleCreateOrConnectWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleCreateOrConnectWithoutCategoryInput>;
export const VehicleCreateOrConnectWithoutCategoryInputObjectZodSchema = makeSchema();
