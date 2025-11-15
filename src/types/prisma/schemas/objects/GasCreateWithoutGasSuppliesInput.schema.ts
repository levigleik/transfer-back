import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleCreateNestedManyWithoutGasInputObjectSchema as VehicleCreateNestedManyWithoutGasInputObjectSchema } from './VehicleCreateNestedManyWithoutGasInput.schema'

const makeSchema = () => z.object({
  type: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  vehicle: z.lazy(() => VehicleCreateNestedManyWithoutGasInputObjectSchema).optional()
}).strict();
export const GasCreateWithoutGasSuppliesInputObjectSchema: z.ZodType<Prisma.GasCreateWithoutGasSuppliesInput> = makeSchema() as unknown as z.ZodType<Prisma.GasCreateWithoutGasSuppliesInput>;
export const GasCreateWithoutGasSuppliesInputObjectZodSchema = makeSchema();
