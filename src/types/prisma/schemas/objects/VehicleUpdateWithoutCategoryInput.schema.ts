import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PlateTypeSchema } from '../enums/PlateType.schema';
import { EnumPlateTypeFieldUpdateOperationsInputObjectSchema as EnumPlateTypeFieldUpdateOperationsInputObjectSchema } from './EnumPlateTypeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { VehicleUpdatephotosInputObjectSchema as VehicleUpdatephotosInputObjectSchema } from './VehicleUpdatephotosInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { GasUpdateOneRequiredWithoutVehicleNestedInputObjectSchema as GasUpdateOneRequiredWithoutVehicleNestedInputObjectSchema } from './GasUpdateOneRequiredWithoutVehicleNestedInput.schema';
import { BrandUpdateOneRequiredWithoutVehiclesNestedInputObjectSchema as BrandUpdateOneRequiredWithoutVehiclesNestedInputObjectSchema } from './BrandUpdateOneRequiredWithoutVehiclesNestedInput.schema';
import { CompanyUpdateOneRequiredWithoutVehiclesNestedInputObjectSchema as CompanyUpdateOneRequiredWithoutVehiclesNestedInputObjectSchema } from './CompanyUpdateOneRequiredWithoutVehiclesNestedInput.schema'

const makeSchema = () => z.object({
  identifier: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  model: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  year: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  capacity: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  doors: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  uf: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  plateType: z.union([PlateTypeSchema, z.lazy(() => EnumPlateTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  plate: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  renavam: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  chassis: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  review: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  photos: z.union([z.lazy(() => VehicleUpdatephotosInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  gas: z.lazy(() => GasUpdateOneRequiredWithoutVehicleNestedInputObjectSchema).optional(),
  brand: z.lazy(() => BrandUpdateOneRequiredWithoutVehiclesNestedInputObjectSchema).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutVehiclesNestedInputObjectSchema).optional()
}).strict();
export const VehicleUpdateWithoutCategoryInputObjectSchema: z.ZodType<Prisma.VehicleUpdateWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleUpdateWithoutCategoryInput>;
export const VehicleUpdateWithoutCategoryInputObjectZodSchema = makeSchema();
