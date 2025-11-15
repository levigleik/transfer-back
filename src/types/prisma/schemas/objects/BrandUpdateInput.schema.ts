import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { VehicleUpdateManyWithoutBrandNestedInputObjectSchema as VehicleUpdateManyWithoutBrandNestedInputObjectSchema } from './VehicleUpdateManyWithoutBrandNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  vehicles: z.lazy(() => VehicleUpdateManyWithoutBrandNestedInputObjectSchema).optional()
}).strict();
export const BrandUpdateInputObjectSchema: z.ZodType<Prisma.BrandUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.BrandUpdateInput>;
export const BrandUpdateInputObjectZodSchema = makeSchema();
