import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClassificationCountOutputTypeSelectObjectSchema as ClassificationCountOutputTypeSelectObjectSchema } from './ClassificationCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ClassificationCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ClassificationCountOutputTypeArgsObjectSchema = makeSchema();
export const ClassificationCountOutputTypeArgsObjectZodSchema = makeSchema();
