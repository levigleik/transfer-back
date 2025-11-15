import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { GasSupplyUncheckedUpdateManyWithoutGasNestedInputObjectSchema as GasSupplyUncheckedUpdateManyWithoutGasNestedInputObjectSchema } from './GasSupplyUncheckedUpdateManyWithoutGasNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  gasSupplies: z.lazy(() => GasSupplyUncheckedUpdateManyWithoutGasNestedInputObjectSchema).optional()
}).strict();
export const GasUncheckedUpdateWithoutVehicleInputObjectSchema: z.ZodType<Prisma.GasUncheckedUpdateWithoutVehicleInput> = makeSchema() as unknown as z.ZodType<Prisma.GasUncheckedUpdateWithoutVehicleInput>;
export const GasUncheckedUpdateWithoutVehicleInputObjectZodSchema = makeSchema();
