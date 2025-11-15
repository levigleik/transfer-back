import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { OccurenceListRelationFilterObjectSchema as OccurenceListRelationFilterObjectSchema } from './OccurenceListRelationFilter.schema'

const classificationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ClassificationWhereInputObjectSchema), z.lazy(() => ClassificationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ClassificationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ClassificationWhereInputObjectSchema), z.lazy(() => ClassificationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  occurences: z.lazy(() => OccurenceListRelationFilterObjectSchema).optional()
}).strict();
export const ClassificationWhereInputObjectSchema: z.ZodType<Prisma.ClassificationWhereInput> = classificationwhereinputSchema as unknown as z.ZodType<Prisma.ClassificationWhereInput>;
export const ClassificationWhereInputObjectZodSchema = classificationwhereinputSchema;
