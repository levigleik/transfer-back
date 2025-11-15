import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleUncheckedCreateNestedManyWithoutGasInputObjectSchema as VehicleUncheckedCreateNestedManyWithoutGasInputObjectSchema } from './VehicleUncheckedCreateNestedManyWithoutGasInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  type: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vehicle: z.lazy(() => VehicleUncheckedCreateNestedManyWithoutGasInputObjectSchema).optional()
}).strict();
export const GasUncheckedCreateWithoutGasSuppliesInputObjectSchema: z.ZodType<Prisma.GasUncheckedCreateWithoutGasSuppliesInput> = makeSchema() as unknown as z.ZodType<Prisma.GasUncheckedCreateWithoutGasSuppliesInput>;
export const GasUncheckedCreateWithoutGasSuppliesInputObjectZodSchema = makeSchema();
