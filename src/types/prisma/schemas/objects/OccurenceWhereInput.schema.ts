import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { SeriousnessScalarRelationFilterObjectSchema as SeriousnessScalarRelationFilterObjectSchema } from './SeriousnessScalarRelationFilter.schema';
import { SeriousnessWhereInputObjectSchema as SeriousnessWhereInputObjectSchema } from './SeriousnessWhereInput.schema';
import { ClassificationScalarRelationFilterObjectSchema as ClassificationScalarRelationFilterObjectSchema } from './ClassificationScalarRelationFilter.schema';
import { ClassificationWhereInputObjectSchema as ClassificationWhereInputObjectSchema } from './ClassificationWhereInput.schema'

const occurencewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OccurenceWhereInputObjectSchema), z.lazy(() => OccurenceWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OccurenceWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OccurenceWhereInputObjectSchema), z.lazy(() => OccurenceWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  seriousnessId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  classificationId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  seriousness: z.union([z.lazy(() => SeriousnessScalarRelationFilterObjectSchema), z.lazy(() => SeriousnessWhereInputObjectSchema)]).optional(),
  classification: z.union([z.lazy(() => ClassificationScalarRelationFilterObjectSchema), z.lazy(() => ClassificationWhereInputObjectSchema)]).optional()
}).strict();
export const OccurenceWhereInputObjectSchema: z.ZodType<Prisma.OccurenceWhereInput> = occurencewhereinputSchema as unknown as z.ZodType<Prisma.OccurenceWhereInput>;
export const OccurenceWhereInputObjectZodSchema = occurencewhereinputSchema;
