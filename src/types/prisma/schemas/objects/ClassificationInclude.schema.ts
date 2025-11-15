import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceFindManySchema as OccurenceFindManySchema } from '../findManyOccurence.schema';
import { ClassificationCountOutputTypeArgsObjectSchema as ClassificationCountOutputTypeArgsObjectSchema } from './ClassificationCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  occurences: z.union([z.boolean(), z.lazy(() => OccurenceFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ClassificationCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ClassificationIncludeObjectSchema: z.ZodType<Prisma.ClassificationInclude> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationInclude>;
export const ClassificationIncludeObjectZodSchema = makeSchema();
