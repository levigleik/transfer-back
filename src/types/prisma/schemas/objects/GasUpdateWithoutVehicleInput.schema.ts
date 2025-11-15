import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { GasSupplyUpdateManyWithoutGasNestedInputObjectSchema as GasSupplyUpdateManyWithoutGasNestedInputObjectSchema } from './GasSupplyUpdateManyWithoutGasNestedInput.schema'

const makeSchema = () => z.object({
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  gasSupplies: z.lazy(() => GasSupplyUpdateManyWithoutGasNestedInputObjectSchema).optional()
}).strict();
export const GasUpdateWithoutVehicleInputObjectSchema: z.ZodType<Prisma.GasUpdateWithoutVehicleInput> = makeSchema() as unknown as z.ZodType<Prisma.GasUpdateWithoutVehicleInput>;
export const GasUpdateWithoutVehicleInputObjectZodSchema = makeSchema();
