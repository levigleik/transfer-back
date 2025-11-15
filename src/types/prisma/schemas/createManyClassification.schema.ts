import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClassificationCreateManyInputObjectSchema as ClassificationCreateManyInputObjectSchema } from './objects/ClassificationCreateManyInput.schema';

export const ClassificationCreateManySchema: z.ZodType<Prisma.ClassificationCreateManyArgs> = z.object({ data: z.union([ ClassificationCreateManyInputObjectSchema, z.array(ClassificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ClassificationCreateManyArgs>;

export const ClassificationCreateManyZodSchema = z.object({ data: z.union([ ClassificationCreateManyInputObjectSchema, z.array(ClassificationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();