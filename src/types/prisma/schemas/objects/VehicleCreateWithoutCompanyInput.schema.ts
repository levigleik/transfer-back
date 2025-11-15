import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PlateTypeSchema } from '../enums/PlateType.schema';
import { VehicleCreatephotosInputObjectSchema as VehicleCreatephotosInputObjectSchema } from './VehicleCreatephotosInput.schema';
import { GasCreateNestedOneWithoutVehicleInputObjectSchema as GasCreateNestedOneWithoutVehicleInputObjectSchema } from './GasCreateNestedOneWithoutVehicleInput.schema';
import { BrandCreateNestedOneWithoutVehiclesInputObjectSchema as BrandCreateNestedOneWithoutVehiclesInputObjectSchema } from './BrandCreateNestedOneWithoutVehiclesInput.schema';
import { CategoryCreateNestedOneWithoutVehiclesInputObjectSchema as CategoryCreateNestedOneWithoutVehiclesInputObjectSchema } from './CategoryCreateNestedOneWithoutVehiclesInput.schema'

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
  gas: z.lazy(() => GasCreateNestedOneWithoutVehicleInputObjectSchema),
  brand: z.lazy(() => BrandCreateNestedOneWithoutVehiclesInputObjectSchema),
  category: z.lazy(() => CategoryCreateNestedOneWithoutVehiclesInputObjectSchema)
}).strict();
export const VehicleCreateWithoutCompanyInputObjectSchema: z.ZodType<Prisma.VehicleCreateWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleCreateWithoutCompanyInput>;
export const VehicleCreateWithoutCompanyInputObjectZodSchema = makeSchema();
