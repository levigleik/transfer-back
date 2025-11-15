import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasCountOutputTypeSelectObjectSchema as GasCountOutputTypeSelectObjectSchema } from './GasCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => GasCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const GasCountOutputTypeArgsObjectSchema = makeSchema();
export const GasCountOutputTypeArgsObjectZodSchema = makeSchema();
