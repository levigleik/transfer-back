import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeriousnessSelectObjectSchema as SeriousnessSelectObjectSchema } from './SeriousnessSelect.schema';
import { SeriousnessIncludeObjectSchema as SeriousnessIncludeObjectSchema } from './SeriousnessInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SeriousnessSelectObjectSchema).optional(),
  include: z.lazy(() => SeriousnessIncludeObjectSchema).optional()
}).strict();
export const SeriousnessArgsObjectSchema = makeSchema();
export const SeriousnessArgsObjectZodSchema = makeSchema();
