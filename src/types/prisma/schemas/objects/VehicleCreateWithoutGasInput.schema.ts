import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PlateTypeSchema } from '../enums/PlateType.schema';
import { VehicleCreatephotosInputObjectSchema as VehicleCreatephotosInputObjectSchema } from './VehicleCreatephotosInput.schema';
import { BrandCreateNestedOneWithoutVehiclesInputObjectSchema as BrandCreateNestedOneWithoutVehiclesInputObjectSchema } from './BrandCreateNestedOneWithoutVehiclesInput.schema';
import { CategoryCreateNestedOneWithoutVehiclesInputObjectSchema as CategoryCreateNestedOneWithoutVehiclesInputObjectSchema } from './CategoryCreateNestedOneWithoutVehiclesInput.schema';
import { CompanyCreateNestedOneWithoutVehiclesInputObjectSchema as CompanyCreateNestedOneWithoutVehiclesInputObjectSchema } from './CompanyCreateNestedOneWithoutVehiclesInput.schema'

const makeSchema = () => z.object({
  identifier: z.number().int(),
  model: z.string(),
  year: z.string(),
  capacity: z.string(),
  doors: z.string(),
  uf: z.string(),
  plateType: PlateTypeSchema,
  plate: z.string(),
  renavam: z.string(),
  chassis: z.string(),
  review: z.number().int(),
  description: z.string().optional().nullable(),
  photos: z.union([z.lazy(() => VehicleCreatephotosInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  brand: z.lazy(() => BrandCreateNestedOneWithoutVehiclesInputObjectSchema),
  category: z.lazy(() => CategoryCreateNestedOneWithoutVehiclesInputObjectSchema),
  company: z.lazy(() => CompanyCreateNestedOneWithoutVehiclesInputObjectSchema)
}).strict();
export const VehicleCreateWithoutGasInputObjectSchema: z.ZodType<Prisma.VehicleCreateWithoutGasInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleCreateWithoutGasInput>;
export const VehicleCreateWithoutGasInputObjectZodSchema = makeSchema();
