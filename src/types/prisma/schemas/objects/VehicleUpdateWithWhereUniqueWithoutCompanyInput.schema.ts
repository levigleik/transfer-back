import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './VehicleWhereUniqueInput.schema';
import { VehicleUpdateWithoutCompanyInputObjectSchema as VehicleUpdateWithoutCompanyInputObjectSchema } from './VehicleUpdateWithoutCompanyInput.schema';
import { VehicleUncheckedUpdateWithoutCompanyInputObjectSchema as VehicleUncheckedUpdateWithoutCompanyInputObjectSchema } from './VehicleUncheckedUpdateWithoutCompanyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => VehicleUpdateWithoutCompanyInputObjectSchema), z.lazy(() => VehicleUncheckedUpdateWithoutCompanyInputObjectSchema)])
}).strict();
export const VehicleUpdateWithWhereUniqueWithoutCompanyInputObjectSchema: z.ZodType<Prisma.VehicleUpdateWithWhereUniqueWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleUpdateWithWhereUniqueWithoutCompanyInput>;
export const VehicleUpdateWithWhereUniqueWithoutCompanyInputObjectZodSchema = makeSchema();
