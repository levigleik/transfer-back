import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleFindManySchema as VehicleFindManySchema } from '../findManyVehicle.schema';
import { CompanyCountOutputTypeArgsObjectSchema as CompanyCountOutputTypeArgsObjectSchema } from './CompanyCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  vehicles: z.union([z.boolean(), z.lazy(() => VehicleFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => CompanyCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CompanyIncludeObjectSchema: z.ZodType<Prisma.CompanyInclude> = makeSchema() as unknown as z.ZodType<Prisma.CompanyInclude>;
export const CompanyIncludeObjectZodSchema = makeSchema();
