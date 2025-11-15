import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasSupplySelectObjectSchema as GasSupplySelectObjectSchema } from './GasSupplySelect.schema';
import { GasSupplyIncludeObjectSchema as GasSupplyIncludeObjectSchema } from './GasSupplyInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => GasSupplySelectObjectSchema).optional(),
  include: z.lazy(() => GasSupplyIncludeObjectSchema).optional()
}).strict();
export const GasSupplyArgsObjectSchema = makeSchema();
export const GasSupplyArgsObjectZodSchema = makeSchema();
