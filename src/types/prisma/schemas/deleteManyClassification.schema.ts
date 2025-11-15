import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClassificationWhereInputObjectSchema as ClassificationWhereInputObjectSchema } from './objects/ClassificationWhereInput.schema';

export const ClassificationDeleteManySchema: z.ZodType<Prisma.ClassificationDeleteManyArgs> = z.object({ where: ClassificationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClassificationDeleteManyArgs>;

export const ClassificationDeleteManyZodSchema = z.object({ where: ClassificationWhereInputObjectSchema.optional() }).strict();