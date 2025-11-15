import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeriousnessWhereInputObjectSchema as SeriousnessWhereInputObjectSchema } from './SeriousnessWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => SeriousnessWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => SeriousnessWhereInputObjectSchema).optional()
}).strict();
export const SeriousnessScalarRelationFilterObjectSchema: z.ZodType<Prisma.SeriousnessScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessScalarRelationFilter>;
export const SeriousnessScalarRelationFilterObjectZodSchema = makeSchema();
