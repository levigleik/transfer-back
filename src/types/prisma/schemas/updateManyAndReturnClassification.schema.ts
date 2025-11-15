import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClassificationSelectObjectSchema as ClassificationSelectObjectSchema } from './objects/ClassificationSelect.schema';
import { ClassificationUpdateManyMutationInputObjectSchema as ClassificationUpdateManyMutationInputObjectSchema } from './objects/ClassificationUpdateManyMutationInput.schema';
import { ClassificationWhereInputObjectSchema as ClassificationWhereInputObjectSchema } from './objects/ClassificationWhereInput.schema';

export const ClassificationUpdateManyAndReturnSchema: z.ZodType<Prisma.ClassificationUpdateManyAndReturnArgs> = z.object({ select: ClassificationSelectObjectSchema.optional(), data: ClassificationUpdateManyMutationInputObjectSchema, where: ClassificationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClassificationUpdateManyAndReturnArgs>;

export const ClassificationUpdateManyAndReturnZodSchema = z.object({ select: ClassificationSelectObjectSchema.optional(), data: ClassificationUpdateManyMutationInputObjectSchema, where: ClassificationWhereInputObjectSchema.optional() }).strict();