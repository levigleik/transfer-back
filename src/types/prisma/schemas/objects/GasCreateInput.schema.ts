import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleCreateNestedManyWithoutGasInputObjectSchema as VehicleCreateNestedManyWithoutGasInputObjectSchema } from './VehicleCreateNestedManyWithoutGasInput.schema';
import { GasSupplyCreateNestedManyWithoutGasInputObjectSchema as GasSupplyCreateNestedManyWithoutGasInputObjectSchema } from './GasSupplyCreateNestedManyWithoutGasInput.schema'

const makeSchema = () => z.object({
  type: z.string(),
  createdAt: z.coerce.date().optional(),
  vehicle: z.lazy(() => VehicleCreateNestedManyWithoutGasInputObjectSchema),
  gasSupplies: z.lazy(() => GasSupplyCreateNestedManyWithoutGasInputObjectSchema)
}).strict();
export const GasCreateInputObjectSchema: z.ZodType<Prisma.GasCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GasCreateInput>;
export const GasCreateInputObjectZodSchema = makeSchema();
