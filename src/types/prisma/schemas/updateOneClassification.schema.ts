import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClassificationSelectObjectSchema as ClassificationSelectObjectSchema } from './objects/ClassificationSelect.schema';
import { ClassificationIncludeObjectSchema as ClassificationIncludeObjectSchema } from './objects/ClassificationInclude.schema';
import { ClassificationUpdateInputObjectSchema as ClassificationUpdateInputObjectSchema } from './objects/ClassificationUpdateInput.schema';
import { ClassificationUncheckedUpdateInputObjectSchema as ClassificationUncheckedUpdateInputObjectSchema } from './objects/ClassificationUncheckedUpdateInput.schema';
import { ClassificationWhereUniqueInputObjectSchema as ClassificationWhereUniqueInputObjectSchema } from './objects/ClassificationWhereUniqueInput.schema';

export const ClassificationUpdateOneSchema: z.ZodType<Prisma.ClassificationUpdateArgs> = z.object({ select: ClassificationSelectObjectSchema.optional(), include: ClassificationIncludeObjectSchema.optional(), data: z.union([ClassificationUpdateInputObjectSchema, ClassificationUncheckedUpdateInputObjectSchema]), where: ClassificationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ClassificationUpdateArgs>;

export const ClassificationUpdateOneZodSchema = z.object({ select: ClassificationSelectObjectSchema.optional(), include: ClassificationIncludeObjectSchema.optional(), data: z.union([ClassificationUpdateInputObjectSchema, ClassificationUncheckedUpdateInputObjectSchema]), where: ClassificationWhereUniqueInputObjectSchema }).strict();