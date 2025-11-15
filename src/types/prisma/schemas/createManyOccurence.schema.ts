import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OccurenceCreateManyInputObjectSchema as OccurenceCreateManyInputObjectSchema } from './objects/OccurenceCreateManyInput.schema';

export const OccurenceCreateManySchema: z.ZodType<Prisma.OccurenceCreateManyArgs> = z.object({ data: z.union([ OccurenceCreateManyInputObjectSchema, z.array(OccurenceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.OccurenceCreateManyArgs>;

export const OccurenceCreateManyZodSchema = z.object({ data: z.union([ OccurenceCreateManyInputObjectSchema, z.array(OccurenceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();