import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './VehicleWhereUniqueInput.schema';
import { VehicleCreateWithoutBrandInputObjectSchema as VehicleCreateWithoutBrandInputObjectSchema } from './VehicleCreateWithoutBrandInput.schema';
import { VehicleUncheckedCreateWithoutBrandInputObjectSchema as VehicleUncheckedCreateWithoutBrandInputObjectSchema } from './VehicleUncheckedCreateWithoutBrandInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VehicleCreateWithoutBrandInputObjectSchema), z.lazy(() => VehicleUncheckedCreateWithoutBrandInputObjectSchema)])
}).strict();
export const VehicleCreateOrConnectWithoutBrandInputObjectSchema: z.ZodType<Prisma.VehicleCreateOrConnectWithoutBrandInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleCreateOrConnectWithoutBrandInput>;
export const VehicleCreateOrConnectWithoutBrandInputObjectZodSchema = makeSchema();
