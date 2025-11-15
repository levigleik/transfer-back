import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasStationSelectObjectSchema as GasStationSelectObjectSchema } from './GasStationSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => GasStationSelectObjectSchema).optional()
}).strict();
export const GasStationArgsObjectSchema = makeSchema();
export const GasStationArgsObjectZodSchema = makeSchema();
