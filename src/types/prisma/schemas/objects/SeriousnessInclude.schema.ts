import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceFindManySchema as OccurenceFindManySchema } from '../findManyOccurence.schema';
import { SeriousnessCountOutputTypeArgsObjectSchema as SeriousnessCountOutputTypeArgsObjectSchema } from './SeriousnessCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  occurences: z.union([z.boolean(), z.lazy(() => OccurenceFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => SeriousnessCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const SeriousnessIncludeObjectSchema: z.ZodType<Prisma.SeriousnessInclude> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessInclude>;
export const SeriousnessIncludeObjectZodSchema = makeSchema();
