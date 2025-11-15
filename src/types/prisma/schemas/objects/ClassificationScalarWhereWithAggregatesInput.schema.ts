import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const classificationscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ClassificationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ClassificationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ClassificationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ClassificationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ClassificationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ClassificationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ClassificationScalarWhereWithAggregatesInput> = classificationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ClassificationScalarWhereWithAggregatesInput>;
export const ClassificationScalarWhereWithAggregatesInputObjectZodSchema = classificationscalarwherewithaggregatesinputSchema;
