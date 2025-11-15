import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClassificationSelectObjectSchema as ClassificationSelectObjectSchema } from './objects/ClassificationSelect.schema';
import { ClassificationIncludeObjectSchema as ClassificationIncludeObjectSchema } from './objects/ClassificationInclude.schema';
import { ClassificationWhereUniqueInputObjectSchema as ClassificationWhereUniqueInputObjectSchema } from './objects/ClassificationWhereUniqueInput.schema';
import { ClassificationCreateInputObjectSchema as ClassificationCreateInputObjectSchema } from './objects/ClassificationCreateInput.schema';
import { ClassificationUncheckedCreateInputObjectSchema as ClassificationUncheckedCreateInputObjectSchema } from './objects/ClassificationUncheckedCreateInput.schema';
import { ClassificationUpdateInputObjectSchema as ClassificationUpdateInputObjectSchema } from './objects/ClassificationUpdateInput.schema';
import { ClassificationUncheckedUpdateInputObjectSchema as ClassificationUncheckedUpdateInputObjectSchema } from './objects/ClassificationUncheckedUpdateInput.schema';

export const ClassificationUpsertOneSchema: z.ZodType<Prisma.ClassificationUpsertArgs> = z.object({ select: ClassificationSelectObjectSchema.optional(), include: ClassificationIncludeObjectSchema.optional(), where: ClassificationWhereUniqueInputObjectSchema, create: z.union([ ClassificationCreateInputObjectSchema, ClassificationUncheckedCreateInputObjectSchema ]), update: z.union([ ClassificationUpdateInputObjectSchema, ClassificationUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ClassificationUpsertArgs>;

export const ClassificationUpsertOneZodSchema = z.object({ select: ClassificationSelectObjectSchema.optional(), include: ClassificationIncludeObjectSchema.optional(), where: ClassificationWhereUniqueInputObjectSchema, create: z.union([ ClassificationCreateInputObjectSchema, ClassificationUncheckedCreateInputObjectSchema ]), update: z.union([ ClassificationUpdateInputObjectSchema, ClassificationUncheckedUpdateInputObjectSchema ]) }).strict();