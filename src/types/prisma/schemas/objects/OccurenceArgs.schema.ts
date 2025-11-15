import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceSelectObjectSchema as OccurenceSelectObjectSchema } from './OccurenceSelect.schema';
import { OccurenceIncludeObjectSchema as OccurenceIncludeObjectSchema } from './OccurenceInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => OccurenceSelectObjectSchema).optional(),
  include: z.lazy(() => OccurenceIncludeObjectSchema).optional()
}).strict();
export const OccurenceArgsObjectSchema = makeSchema();
export const OccurenceArgsObjectZodSchema = makeSchema();
