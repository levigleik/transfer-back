import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const seriousnessscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => SeriousnessScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SeriousnessScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SeriousnessScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SeriousnessScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => SeriousnessScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  level: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const SeriousnessScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.SeriousnessScalarWhereWithAggregatesInput> = seriousnessscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.SeriousnessScalarWhereWithAggregatesInput>;
export const SeriousnessScalarWhereWithAggregatesInputObjectZodSchema = seriousnessscalarwherewithaggregatesinputSchema;
