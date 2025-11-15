import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeriousnessCountOutputTypeSelectObjectSchema as SeriousnessCountOutputTypeSelectObjectSchema } from './SeriousnessCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SeriousnessCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const SeriousnessCountOutputTypeArgsObjectSchema = makeSchema();
export const SeriousnessCountOutputTypeArgsObjectZodSchema = makeSchema();
