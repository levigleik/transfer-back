import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasSupplyCreateNestedManyWithoutGasInputObjectSchema as GasSupplyCreateNestedManyWithoutGasInputObjectSchema } from './GasSupplyCreateNestedManyWithoutGasInput.schema'

const makeSchema = () => z.object({
  type: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  gasSupplies: z.lazy(() => GasSupplyCreateNestedManyWithoutGasInputObjectSchema).optional()
}).strict();
export const GasCreateWithoutVehicleInputObjectSchema: z.ZodType<Prisma.GasCreateWithoutVehicleInput> = makeSchema() as unknown as z.ZodType<Prisma.GasCreateWithoutVehicleInput>;
export const GasCreateWithoutVehicleInputObjectZodSchema = makeSchema();
