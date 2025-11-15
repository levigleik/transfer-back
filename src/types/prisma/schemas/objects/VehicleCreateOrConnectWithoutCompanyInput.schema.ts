import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './VehicleWhereUniqueInput.schema';
import { VehicleCreateWithoutCompanyInputObjectSchema as VehicleCreateWithoutCompanyInputObjectSchema } from './VehicleCreateWithoutCompanyInput.schema';
import { VehicleUncheckedCreateWithoutCompanyInputObjectSchema as VehicleUncheckedCreateWithoutCompanyInputObjectSchema } from './VehicleUncheckedCreateWithoutCompanyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VehicleCreateWithoutCompanyInputObjectSchema), z.lazy(() => VehicleUncheckedCreateWithoutCompanyInputObjectSchema)])
}).strict();
export const VehicleCreateOrConnectWithoutCompanyInputObjectSchema: z.ZodType<Prisma.VehicleCreateOrConnectWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleCreateOrConnectWithoutCompanyInput>;
export const VehicleCreateOrConnectWithoutCompanyInputObjectZodSchema = makeSchema();
