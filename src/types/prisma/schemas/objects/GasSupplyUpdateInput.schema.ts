import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { FloatFieldUpdateOperationsInputObjectSchema as FloatFieldUpdateOperationsInputObjectSchema } from './FloatFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { GasUpdateOneRequiredWithoutGasSuppliesNestedInputObjectSchema as GasUpdateOneRequiredWithoutGasSuppliesNestedInputObjectSchema } from './GasUpdateOneRequiredWithoutGasSuppliesNestedInput.schema'

const makeSchema = () => z.object({
  kmToReview: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  kmToStop: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  quantity: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  supplyAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  totalPrice: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  gas: z.lazy(() => GasUpdateOneRequiredWithoutGasSuppliesNestedInputObjectSchema).optional()
}).strict();
export const GasSupplyUpdateInputObjectSchema: z.ZodType<Prisma.GasSupplyUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyUpdateInput>;
export const GasSupplyUpdateInputObjectZodSchema = makeSchema();
