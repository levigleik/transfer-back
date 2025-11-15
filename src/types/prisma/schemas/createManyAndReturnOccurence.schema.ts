import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OccurenceSelectObjectSchema as OccurenceSelectObjectSchema } from './objects/OccurenceSelect.schema';
import { OccurenceCreateManyInputObjectSchema as OccurenceCreateManyInputObjectSchema } from './objects/OccurenceCreateManyInput.schema';

export const OccurenceCreateManyAndReturnSchema: z.ZodType<Prisma.OccurenceCreateManyAndReturnArgs> = z.object({ select: OccurenceSelectObjectSchema.optional(), data: z.union([ OccurenceCreateManyInputObjectSchema, z.array(OccurenceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.OccurenceCreateManyAndReturnArgs>;

export const OccurenceCreateManyAndReturnZodSchema = z.object({ select: OccurenceSelectObjectSchema.optional(), data: z.union([ OccurenceCreateManyInputObjectSchema, z.array(OccurenceCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();