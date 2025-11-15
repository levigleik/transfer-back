import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleFindManySchema as VehicleFindManySchema } from '../findManyVehicle.schema';
import { BrandCountOutputTypeArgsObjectSchema as BrandCountOutputTypeArgsObjectSchema } from './BrandCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  vehicles: z.union([z.boolean(), z.lazy(() => VehicleFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => BrandCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const BrandSelectObjectSchema: z.ZodType<Prisma.BrandSelect> = makeSchema() as unknown as z.ZodType<Prisma.BrandSelect>;
export const BrandSelectObjectZodSchema = makeSchema();
