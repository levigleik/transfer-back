import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceFindManySchema as OccurenceFindManySchema } from '../findManyOccurence.schema';
import { SeriousnessCountOutputTypeArgsObjectSchema as SeriousnessCountOutputTypeArgsObjectSchema } from './SeriousnessCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  level: z.boolean().optional(),
  occurences: z.union([z.boolean(), z.lazy(() => OccurenceFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => SeriousnessCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SeriousnessSelectObjectSchema: z.ZodType<Prisma.SeriousnessSelect> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessSelect>;
export const SeriousnessSelectObjectZodSchema = makeSchema();
