import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { VehicleUpdateManyWithoutGasNestedInputObjectSchema as VehicleUpdateManyWithoutGasNestedInputObjectSchema } from './VehicleUpdateManyWithoutGasNestedInput.schema'

const makeSchema = () => z.object({
  type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  vehicle: z.lazy(() => VehicleUpdateManyWithoutGasNestedInputObjectSchema).optional()
}).strict();
export const GasUpdateWithoutGasSuppliesInputObjectSchema: z.ZodType<Prisma.GasUpdateWithoutGasSuppliesInput> = makeSchema() as unknown as z.ZodType<Prisma.GasUpdateWithoutGasSuppliesInput>;
export const GasUpdateWithoutGasSuppliesInputObjectZodSchema = makeSchema();
