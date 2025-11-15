import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleScalarWhereInputObjectSchema as VehicleScalarWhereInputObjectSchema } from './VehicleScalarWhereInput.schema';
import { VehicleUpdateManyMutationInputObjectSchema as VehicleUpdateManyMutationInputObjectSchema } from './VehicleUpdateManyMutationInput.schema';
import { VehicleUncheckedUpdateManyWithoutGasInputObjectSchema as VehicleUncheckedUpdateManyWithoutGasInputObjectSchema } from './VehicleUncheckedUpdateManyWithoutGasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VehicleScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => VehicleUpdateManyMutationInputObjectSchema), z.lazy(() => VehicleUncheckedUpdateManyWithoutGasInputObjectSchema)])
}).strict();
export const VehicleUpdateManyWithWhereWithoutGasInputObjectSchema: z.ZodType<Prisma.VehicleUpdateManyWithWhereWithoutGasInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleUpdateManyWithWhereWithoutGasInput>;
export const VehicleUpdateManyWithWhereWithoutGasInputObjectZodSchema = makeSchema();
