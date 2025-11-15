import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeriousnessArgsObjectSchema as SeriousnessArgsObjectSchema } from './SeriousnessArgs.schema';
import { ClassificationArgsObjectSchema as ClassificationArgsObjectSchema } from './ClassificationArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  date: z.boolean().optional(),
  description: z.boolean().optional(),
  seriousness: z.union([z.boolean(), z.lazy(() => SeriousnessArgsObjectSchema)]).optional(),
  seriousnessId: z.boolean().optional(),
  classification: z.union([z.boolean(), z.lazy(() => ClassificationArgsObjectSchema)]).optional(),
  classificationId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const OccurenceSelectObjectSchema: z.ZodType<Prisma.OccurenceSelect> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceSelect>;
export const OccurenceSelectObjectZodSchema = makeSchema();
