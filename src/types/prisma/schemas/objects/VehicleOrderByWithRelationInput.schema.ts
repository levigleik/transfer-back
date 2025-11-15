import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GasOrderByWithRelationInputObjectSchema as GasOrderByWithRelationInputObjectSchema } from './GasOrderByWithRelationInput.schema';
import { BrandOrderByWithRelationInputObjectSchema as BrandOrderByWithRelationInputObjectSchema } from './BrandOrderByWithRelationInput.schema';
import { CategoryOrderByWithRelationInputObjectSchema as CategoryOrderByWithRelationInputObjectSchema } from './CategoryOrderByWithRelationInput.schema';
import { CompanyOrderByWithRelationInputObjectSchema as CompanyOrderByWithRelationInputObjectSchema } from './CompanyOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  identifier: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  year: SortOrderSchema.optional(),
  capacity: SortOrderSchema.optional(),
  doors: SortOrderSchema.optional(),
  uf: SortOrderSchema.optional(),
  plateType: SortOrderSchema.optional(),
  plate: SortOrderSchema.optional(),
  renavam: SortOrderSchema.optional(),
  chassis: SortOrderSchema.optional(),
  review: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  photos: SortOrderSchema.optional(),
  gasId: SortOrderSchema.optional(),
  brandId: SortOrderSchema.optional(),
  categoryId: SortOrderSchema.optional(),
  companyId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  gas: z.lazy(() => GasOrderByWithRelationInputObjectSchema).optional(),
  brand: z.lazy(() => BrandOrderByWithRelationInputObjectSchema).optional(),
  category: z.lazy(() => CategoryOrderByWithRelationInputObjectSchema).optional(),
  company: z.lazy(() => CompanyOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const VehicleOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.VehicleOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleOrderByWithRelationInput>;
export const VehicleOrderByWithRelationInputObjectZodSchema = makeSchema();
