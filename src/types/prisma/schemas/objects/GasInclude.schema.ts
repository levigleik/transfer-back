import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleFindManySchema as VehicleFindManySchema } from '../findManyVehicle.schema';
import { GasSupplyFindManySchema as GasSupplyFindManySchema } from '../findManyGasSupply.schema';
import { GasCountOutputTypeArgsObjectSchema as GasCountOutputTypeArgsObjectSchema } from './GasCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  vehicle: z.union([z.boolean(), z.lazy(() => VehicleFindManySchema)]).optional(),
  gasSupplies: z.union([z.boolean(), z.lazy(() => GasSupplyFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => GasCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const GasIncludeObjectSchema: z.ZodType<Prisma.GasInclude> = makeSchema() as unknown as z.ZodType<Prisma.GasInclude>;
export const GasIncludeObjectZodSchema = makeSchema();
