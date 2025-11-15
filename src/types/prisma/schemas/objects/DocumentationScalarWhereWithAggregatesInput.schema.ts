import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema'

const documentationscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => DocumentationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DocumentationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DocumentationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DocumentationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => DocumentationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  expiryAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  antecipateRenewal: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  days: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DocumentationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.DocumentationScalarWhereWithAggregatesInput> = documentationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.DocumentationScalarWhereWithAggregatesInput>;
export const DocumentationScalarWhereWithAggregatesInputObjectZodSchema = documentationscalarwherewithaggregatesinputSchema;
