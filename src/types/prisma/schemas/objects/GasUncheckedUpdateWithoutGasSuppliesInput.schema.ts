import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { VehicleUncheckedUpdateManyWithoutGasNestedInputObjectSchema as VehicleUncheckedUpdateManyWithoutGasNestedInputObjectSchema } from './VehicleUncheckedUpdateManyWithoutGasNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  vehicle: z.lazy(() => VehicleUncheckedUpdateManyWithoutGasNestedInputObjectSchema).optional()
}).strict();
export const GasUncheckedUpdateWithoutGasSuppliesInputObjectSchema: z.ZodType<Prisma.GasUncheckedUpdateWithoutGasSuppliesInput> = makeSchema() as unknown as z.ZodType<Prisma.GasUncheckedUpdateWithoutGasSuppliesInput>;
export const GasUncheckedUpdateWithoutGasSuppliesInputObjectZodSchema = makeSchema();
