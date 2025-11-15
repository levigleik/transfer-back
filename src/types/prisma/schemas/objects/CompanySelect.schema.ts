import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleFindManySchema as VehicleFindManySchema } from '../findManyVehicle.schema';
import { CompanyCountOutputTypeArgsObjectSchema as CompanyCountOutputTypeArgsObjectSchema } from './CompanyCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  cnpj: z.boolean().optional(),
  vehicles: z.union([z.boolean(), z.lazy(() => VehicleFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => CompanyCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const CompanySelectObjectSchema: z.ZodType<Prisma.CompanySelect> = makeSchema() as unknown as z.ZodType<Prisma.CompanySelect>;
export const CompanySelectObjectZodSchema = makeSchema();
