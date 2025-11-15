import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeriousnessArgsObjectSchema as SeriousnessArgsObjectSchema } from './SeriousnessArgs.schema';
import { ClassificationArgsObjectSchema as ClassificationArgsObjectSchema } from './ClassificationArgs.schema'

const makeSchema = () => z.object({
  seriousness: z.union([z.boolean(), z.lazy(() => SeriousnessArgsObjectSchema)]).optional(),
  classification: z.union([z.boolean(), z.lazy(() => ClassificationArgsObjectSchema)]).optional()
}).strict();
export const OccurenceIncludeObjectSchema: z.ZodType<Prisma.OccurenceInclude> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceInclude>;
export const OccurenceIncludeObjectZodSchema = makeSchema();
