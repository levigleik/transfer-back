import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasArgsObjectSchema as GasArgsObjectSchema } from './GasArgs.schema';
import { BrandArgsObjectSchema as BrandArgsObjectSchema } from './BrandArgs.schema';
import { CategoryArgsObjectSchema as CategoryArgsObjectSchema } from './CategoryArgs.schema';
import { CompanyArgsObjectSchema as CompanyArgsObjectSchema } from './CompanyArgs.schema'

const makeSchema = () => z.object({
  gas: z.union([z.boolean(), z.lazy(() => GasArgsObjectSchema)]).optional(),
  brand: z.union([z.boolean(), z.lazy(() => BrandArgsObjectSchema)]).optional(),
  category: z.union([z.boolean(), z.lazy(() => CategoryArgsObjectSchema)]).optional(),
  company: z.union([z.boolean(), z.lazy(() => CompanyArgsObjectSchema)]).optional()
}).strict();
export const VehicleIncludeObjectSchema: z.ZodType<Prisma.VehicleInclude> = makeSchema() as unknown as z.ZodType<Prisma.VehicleInclude>;
export const VehicleIncludeObjectZodSchema = makeSchema();
