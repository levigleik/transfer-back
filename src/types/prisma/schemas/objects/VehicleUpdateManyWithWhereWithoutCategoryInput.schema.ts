import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleScalarWhereInputObjectSchema as VehicleScalarWhereInputObjectSchema } from './VehicleScalarWhereInput.schema';
import { VehicleUpdateManyMutationInputObjectSchema as VehicleUpdateManyMutationInputObjectSchema } from './VehicleUpdateManyMutationInput.schema';
import { VehicleUncheckedUpdateManyWithoutCategoryInputObjectSchema as VehicleUncheckedUpdateManyWithoutCategoryInputObjectSchema } from './VehicleUncheckedUpdateManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VehicleScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => VehicleUpdateManyMutationInputObjectSchema), z.lazy(() => VehicleUncheckedUpdateManyWithoutCategoryInputObjectSchema)])
}).strict();
export const VehicleUpdateManyWithWhereWithoutCategoryInputObjectSchema: z.ZodType<Prisma.VehicleUpdateManyWithWhereWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleUpdateManyWithWhereWithoutCategoryInput>;
export const VehicleUpdateManyWithWhereWithoutCategoryInputObjectZodSchema = makeSchema();
