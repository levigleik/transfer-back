import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PlateTypeSchema } from '../enums/PlateType.schema';
import { VehicleCreatephotosInputObjectSchema as VehicleCreatephotosInputObjectSchema } from './VehicleCreatephotosInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
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
  gasId: z.number().int(),
  brandId: z.number().int(),
  categoryId: z.number().int(),
  companyId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const VehicleCreateManyInputObjectSchema: z.ZodType<Prisma.VehicleCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleCreateManyInput>;
export const VehicleCreateManyInputObjectZodSchema = makeSchema();
