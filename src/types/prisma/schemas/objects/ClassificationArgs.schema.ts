import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClassificationSelectObjectSchema as ClassificationSelectObjectSchema } from './ClassificationSelect.schema';
import { ClassificationIncludeObjectSchema as ClassificationIncludeObjectSchema } from './ClassificationInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ClassificationSelectObjectSchema).optional(),
  include: z.lazy(() => ClassificationIncludeObjectSchema).optional()
}).strict();
export const ClassificationArgsObjectSchema = makeSchema();
export const ClassificationArgsObjectZodSchema = makeSchema();
