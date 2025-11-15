import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleScalarWhereInputObjectSchema as VehicleScalarWhereInputObjectSchema } from './VehicleScalarWhereInput.schema';
import { VehicleUpdateManyMutationInputObjectSchema as VehicleUpdateManyMutationInputObjectSchema } from './VehicleUpdateManyMutationInput.schema';
import { VehicleUncheckedUpdateManyWithoutCompanyInputObjectSchema as VehicleUncheckedUpdateManyWithoutCompanyInputObjectSchema } from './VehicleUncheckedUpdateManyWithoutCompanyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VehicleScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => VehicleUpdateManyMutationInputObjectSchema), z.lazy(() => VehicleUncheckedUpdateManyWithoutCompanyInputObjectSchema)])
}).strict();
export const VehicleUpdateManyWithWhereWithoutCompanyInputObjectSchema: z.ZodType<Prisma.VehicleUpdateManyWithWhereWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleUpdateManyWithWhereWithoutCompanyInput>;
export const VehicleUpdateManyWithWhereWithoutCompanyInputObjectZodSchema = makeSchema();
