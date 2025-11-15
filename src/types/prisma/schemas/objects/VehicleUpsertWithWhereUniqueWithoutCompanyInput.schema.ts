import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './VehicleWhereUniqueInput.schema';
import { VehicleUpdateWithoutCompanyInputObjectSchema as VehicleUpdateWithoutCompanyInputObjectSchema } from './VehicleUpdateWithoutCompanyInput.schema';
import { VehicleUncheckedUpdateWithoutCompanyInputObjectSchema as VehicleUncheckedUpdateWithoutCompanyInputObjectSchema } from './VehicleUncheckedUpdateWithoutCompanyInput.schema';
import { VehicleCreateWithoutCompanyInputObjectSchema as VehicleCreateWithoutCompanyInputObjectSchema } from './VehicleCreateWithoutCompanyInput.schema';
import { VehicleUncheckedCreateWithoutCompanyInputObjectSchema as VehicleUncheckedCreateWithoutCompanyInputObjectSchema } from './VehicleUncheckedCreateWithoutCompanyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VehicleWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => VehicleUpdateWithoutCompanyInputObjectSchema), z.lazy(() => VehicleUncheckedUpdateWithoutCompanyInputObjectSchema)]),
  create: z.union([z.lazy(() => VehicleCreateWithoutCompanyInputObjectSchema), z.lazy(() => VehicleUncheckedCreateWithoutCompanyInputObjectSchema)])
}).strict();
export const VehicleUpsertWithWhereUniqueWithoutCompanyInputObjectSchema: z.ZodType<Prisma.VehicleUpsertWithWhereUniqueWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleUpsertWithWhereUniqueWithoutCompanyInput>;
export const VehicleUpsertWithWhereUniqueWithoutCompanyInputObjectZodSchema = makeSchema();
