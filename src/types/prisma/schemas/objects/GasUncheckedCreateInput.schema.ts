import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleUncheckedCreateNestedManyWithoutGasInputObjectSchema as VehicleUncheckedCreateNestedManyWithoutGasInputObjectSchema } from './VehicleUncheckedCreateNestedManyWithoutGasInput.schema';
import { GasSupplyUncheckedCreateNestedManyWithoutGasInputObjectSchema as GasSupplyUncheckedCreateNestedManyWithoutGasInputObjectSchema } from './GasSupplyUncheckedCreateNestedManyWithoutGasInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  type: z.string(),
  createdAt: z.coerce.date().optional(),
  vehicle: z.lazy(() => VehicleUncheckedCreateNestedManyWithoutGasInputObjectSchema),
  gasSupplies: z.lazy(() => GasSupplyUncheckedCreateNestedManyWithoutGasInputObjectSchema)
}).strict();
export const GasUncheckedCreateInputObjectSchema: z.ZodType<Prisma.GasUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GasUncheckedCreateInput>;
export const GasUncheckedCreateInputObjectZodSchema = makeSchema();
