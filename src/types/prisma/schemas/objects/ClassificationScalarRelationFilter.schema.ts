import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ClassificationWhereInputObjectSchema as ClassificationWhereInputObjectSchema } from './ClassificationWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ClassificationWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ClassificationWhereInputObjectSchema).optional()
}).strict();
export const ClassificationScalarRelationFilterObjectSchema: z.ZodType<Prisma.ClassificationScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationScalarRelationFilter>;
export const ClassificationScalarRelationFilterObjectZodSchema = makeSchema();
