import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClassificationSelectObjectSchema as ClassificationSelectObjectSchema } from './objects/ClassificationSelect.schema';
import { ClassificationIncludeObjectSchema as ClassificationIncludeObjectSchema } from './objects/ClassificationInclude.schema';
import { ClassificationWhereUniqueInputObjectSchema as ClassificationWhereUniqueInputObjectSchema } from './objects/ClassificationWhereUniqueInput.schema';

export const ClassificationDeleteOneSchema: z.ZodType<Prisma.ClassificationDeleteArgs> = z.object({ select: ClassificationSelectObjectSchema.optional(), include: ClassificationIncludeObjectSchema.optional(), where: ClassificationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ClassificationDeleteArgs>;

export const ClassificationDeleteOneZodSchema = z.object({ select: ClassificationSelectObjectSchema.optional(), include: ClassificationIncludeObjectSchema.optional(), where: ClassificationWhereUniqueInputObjectSchema }).strict();