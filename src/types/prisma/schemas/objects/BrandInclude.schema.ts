import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleFindManySchema as VehicleFindManySchema } from '../findManyVehicle.schema';
import { BrandCountOutputTypeArgsObjectSchema as BrandCountOutputTypeArgsObjectSchema } from './BrandCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  vehicles: z.union([z.boolean(), z.lazy(() => VehicleFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => BrandCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const BrandIncludeObjectSchema: z.ZodType<Prisma.BrandInclude> = makeSchema() as unknown as z.ZodType<Prisma.BrandInclude>;
export const BrandIncludeObjectZodSchema = makeSchema();
