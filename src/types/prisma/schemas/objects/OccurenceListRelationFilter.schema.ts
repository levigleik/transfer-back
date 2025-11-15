import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceWhereInputObjectSchema as OccurenceWhereInputObjectSchema } from './OccurenceWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => OccurenceWhereInputObjectSchema).optional(),
  some: z.lazy(() => OccurenceWhereInputObjectSchema).optional(),
  none: z.lazy(() => OccurenceWhereInputObjectSchema).optional()
}).strict();
export const OccurenceListRelationFilterObjectSchema: z.ZodType<Prisma.OccurenceListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceListRelationFilter>;
export const OccurenceListRelationFilterObjectZodSchema = makeSchema();
