import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const occurencescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => OccurenceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OccurenceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OccurenceScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OccurenceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => OccurenceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  date: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  seriousnessId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  classificationId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const OccurenceScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.OccurenceScalarWhereWithAggregatesInput> = occurencescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.OccurenceScalarWhereWithAggregatesInput>;
export const OccurenceScalarWhereWithAggregatesInputObjectZodSchema = occurencescalarwherewithaggregatesinputSchema;
