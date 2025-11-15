import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleFindManySchema as VehicleFindManySchema } from '../findManyVehicle.schema';
import { GasSupplyFindManySchema as GasSupplyFindManySchema } from '../findManyGasSupply.schema';
import { GasCountOutputTypeArgsObjectSchema as GasCountOutputTypeArgsObjectSchema } from './GasCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  vehicle: z.union([z.boolean(), z.lazy(() => VehicleFindManySchema)]).optional(),
  gasSupplies: z.union([z.boolean(), z.lazy(() => GasSupplyFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => GasCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const GasSelectObjectSchema: z.ZodType<Prisma.GasSelect> = makeSchema() as unknown as z.ZodType<Prisma.GasSelect>;
export const GasSelectObjectZodSchema = makeSchema();
