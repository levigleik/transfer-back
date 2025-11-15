import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema'

const documentationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => DocumentationWhereInputObjectSchema), z.lazy(() => DocumentationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => DocumentationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => DocumentationWhereInputObjectSchema), z.lazy(() => DocumentationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  expiryAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  antecipateRenewal: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  days: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const DocumentationWhereInputObjectSchema: z.ZodType<Prisma.DocumentationWhereInput> = documentationwhereinputSchema as unknown as z.ZodType<Prisma.DocumentationWhereInput>;
export const DocumentationWhereInputObjectZodSchema = documentationwhereinputSchema;
