import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleScalarWhereInputObjectSchema as VehicleScalarWhereInputObjectSchema } from './VehicleScalarWhereInput.schema';
import { VehicleUpdateManyMutationInputObjectSchema as VehicleUpdateManyMutationInputObjectSchema } from './VehicleUpdateManyMutationInput.schema';
import { VehicleUncheckedUpdateManyWithoutBrandInputObjectSchema as VehicleUncheckedUpdateManyWithoutBrandInputObjectSchema } from './VehicleUncheckedUpdateManyWithoutBrandInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VehicleScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => VehicleUpdateManyMutationInputObjectSchema), z.lazy(() => VehicleUncheckedUpdateManyWithoutBrandInputObjectSchema)])
}).strict();
export const VehicleUpdateManyWithWhereWithoutBrandInputObjectSchema: z.ZodType<Prisma.VehicleUpdateManyWithWhereWithoutBrandInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleUpdateManyWithWhereWithoutBrandInput>;
export const VehicleUpdateManyWithWhereWithoutBrandInputObjectZodSchema = makeSchema();
