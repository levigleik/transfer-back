import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleSelectObjectSchema as VehicleSelectObjectSchema } from './VehicleSelect.schema';
import { VehicleIncludeObjectSchema as VehicleIncludeObjectSchema } from './VehicleInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => VehicleSelectObjectSchema).optional(),
  include: z.lazy(() => VehicleIncludeObjectSchema).optional()
}).strict();
export const VehicleArgsObjectSchema = makeSchema();
export const VehicleArgsObjectZodSchema = makeSchema();
