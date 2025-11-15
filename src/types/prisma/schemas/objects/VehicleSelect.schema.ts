import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasArgsObjectSchema as GasArgsObjectSchema } from './GasArgs.schema';
import { BrandArgsObjectSchema as BrandArgsObjectSchema } from './BrandArgs.schema';
import { CategoryArgsObjectSchema as CategoryArgsObjectSchema } from './CategoryArgs.schema';
import { CompanyArgsObjectSchema as CompanyArgsObjectSchema } from './CompanyArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  identifier: z.boolean().optional(),
  model: z.boolean().optional(),
  year: z.boolean().optional(),
  capacity: z.boolean().optional(),
  doors: z.boolean().optional(),
  uf: z.boolean().optional(),
  plateType: z.boolean().optional(),
  plate: z.boolean().optional(),
  renavam: z.boolean().optional(),
  chassis: z.boolean().optional(),
  review: z.boolean().optional(),
  description: z.boolean().optional(),
  photos: z.boolean().optional(),
  gas: z.union([z.boolean(), z.lazy(() => GasArgsObjectSchema)]).optional(),
  gasId: z.boolean().optional(),
  brand: z.union([z.boolean(), z.lazy(() => BrandArgsObjectSchema)]).optional(),
  brandId: z.boolean().optional(),
  category: z.union([z.boolean(), z.lazy(() => CategoryArgsObjectSchema)]).optional(),
  categoryId: z.boolean().optional(),
  company: z.union([z.boolean(), z.lazy(() => CompanyArgsObjectSchema)]).optional(),
  companyId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const VehicleSelectObjectSchema: z.ZodType<Prisma.VehicleSelect> = makeSchema() as unknown as z.ZodType<Prisma.VehicleSelect>;
export const VehicleSelectObjectZodSchema = makeSchema();
