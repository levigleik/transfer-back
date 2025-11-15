import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasWhereInputObjectSchema as GasWhereInputObjectSchema } from './GasWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => GasWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => GasWhereInputObjectSchema).optional()
}).strict();
export const GasScalarRelationFilterObjectSchema: z.ZodType<Prisma.GasScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.GasScalarRelationFilter>;
export const GasScalarRelationFilterObjectZodSchema = makeSchema();
