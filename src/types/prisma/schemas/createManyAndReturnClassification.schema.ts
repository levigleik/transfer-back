import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClassificationSelectObjectSchema as ClassificationSelectObjectSchema } from './objects/ClassificationSelect.schema';
import { ClassificationCreateManyInputObjectSchema as ClassificationCreateManyInputObjectSchema } from './objects/ClassificationCreateManyInput.schema';

export const ClassificationCreateManyAndReturnSchema: z.ZodType<Prisma.ClassificationCreateManyAndReturnArgs> = z.object({ select: ClassificationSelectObjectSchema.optional(), data: z.union([ ClassificationCreateManyInputObjectSchema, z.array(ClassificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ClassificationCreateManyAndReturnArgs>;

export const ClassificationCreateManyAndReturnZodSchema = z.object({ select: ClassificationSelectObjectSchema.optional(), data: z.union([ ClassificationCreateManyInputObjectSchema, z.array(ClassificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();