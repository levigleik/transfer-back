import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BrandWhereInputObjectSchema as BrandWhereInputObjectSchema } from './BrandWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => BrandWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => BrandWhereInputObjectSchema).optional()
}).strict();
export const BrandScalarRelationFilterObjectSchema: z.ZodType<Prisma.BrandScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.BrandScalarRelationFilter>;
export const BrandScalarRelationFilterObjectZodSchema = makeSchema();
