import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClassificationSelectObjectSchema as ClassificationSelectObjectSchema } from './objects/ClassificationSelect.schema';
import { ClassificationIncludeObjectSchema as ClassificationIncludeObjectSchema } from './objects/ClassificationInclude.schema';
import { ClassificationCreateInputObjectSchema as ClassificationCreateInputObjectSchema } from './objects/ClassificationCreateInput.schema';
import { ClassificationUncheckedCreateInputObjectSchema as ClassificationUncheckedCreateInputObjectSchema } from './objects/ClassificationUncheckedCreateInput.schema';

export const ClassificationCreateOneSchema: z.ZodType<Prisma.ClassificationCreateArgs> = z.object({ select: ClassificationSelectObjectSchema.optional(), include: ClassificationIncludeObjectSchema.optional(), data: z.union([ClassificationCreateInputObjectSchema, ClassificationUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ClassificationCreateArgs>;

export const ClassificationCreateOneZodSchema = z.object({ select: ClassificationSelectObjectSchema.optional(), include: ClassificationIncludeObjectSchema.optional(), data: z.union([ClassificationCreateInputObjectSchema, ClassificationUncheckedCreateInputObjectSchema]) }).strict();