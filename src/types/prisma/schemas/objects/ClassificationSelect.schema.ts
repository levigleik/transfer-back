import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceFindManySchema as OccurenceFindManySchema } from '../findManyOccurence.schema';
import { ClassificationCountOutputTypeArgsObjectSchema as ClassificationCountOutputTypeArgsObjectSchema } from './ClassificationCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  description: z.boolean().optional(),
  occurences: z.union([z.boolean(), z.lazy(() => OccurenceFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => ClassificationCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ClassificationSelectObjectSchema: z.ZodType<Prisma.ClassificationSelect> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationSelect>;
export const ClassificationSelectObjectZodSchema = makeSchema();
