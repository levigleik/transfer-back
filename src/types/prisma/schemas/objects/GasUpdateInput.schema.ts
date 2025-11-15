import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { VehicleUpdateManyWithoutGasNestedInputObjectSchema as VehicleUpdateManyWithoutGasNestedInputObjectSchema } from './VehicleUpdateManyWithoutGasNestedInput.schema';
import { GasSupplyUpdateManyWithoutGasNestedInputObjectSchema as GasSupplyUpdateManyWithoutGasNestedInputObjectSchema } from './GasSupplyUpdateManyWithoutGasNestedInput.schema'

const makeSchema = () => z.object({
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  vehicle: z.lazy(() => VehicleUpdateManyWithoutGasNestedInputObjectSchema).optional(),
  gasSupplies: z.lazy(() => GasSupplyUpdateManyWithoutGasNestedInputObjectSchema).optional()
}).strict();
export const GasUpdateInputObjectSchema: z.ZodType<Prisma.GasUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.GasUpdateInput>;
export const GasUpdateInputObjectZodSchema = makeSchema();
