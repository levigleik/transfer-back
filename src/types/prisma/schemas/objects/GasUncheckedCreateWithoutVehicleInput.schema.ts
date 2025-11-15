import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasSupplyUncheckedCreateNestedManyWithoutGasInputObjectSchema as GasSupplyUncheckedCreateNestedManyWithoutGasInputObjectSchema } from './GasSupplyUncheckedCreateNestedManyWithoutGasInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  type: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  gasSupplies: z.lazy(() => GasSupplyUncheckedCreateNestedManyWithoutGasInputObjectSchema).optional()
}).strict();
export const GasUncheckedCreateWithoutVehicleInputObjectSchema: z.ZodType<Prisma.GasUncheckedCreateWithoutVehicleInput> = makeSchema() as unknown as z.ZodType<Prisma.GasUncheckedCreateWithoutVehicleInput>;
export const GasUncheckedCreateWithoutVehicleInputObjectZodSchema = makeSchema();
