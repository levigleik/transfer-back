import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const occurencescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OccurenceScalarWhereInputObjectSchema), z.lazy(() => OccurenceScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OccurenceScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OccurenceScalarWhereInputObjectSchema), z.lazy(() => OccurenceScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  seriousnessId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  classificationId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const OccurenceScalarWhereInputObjectSchema: z.ZodType<Prisma.OccurenceScalarWhereInput> = occurencescalarwhereinputSchema as unknown as z.ZodType<Prisma.OccurenceScalarWhereInput>;
export const OccurenceScalarWhereInputObjectZodSchema = occurencescalarwhereinputSchema;
