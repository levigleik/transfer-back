import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClassificationUpdateManyMutationInputObjectSchema as ClassificationUpdateManyMutationInputObjectSchema } from './objects/ClassificationUpdateManyMutationInput.schema';
import { ClassificationWhereInputObjectSchema as ClassificationWhereInputObjectSchema } from './objects/ClassificationWhereInput.schema';

export const ClassificationUpdateManySchema: z.ZodType<Prisma.ClassificationUpdateManyArgs> = z.object({ data: ClassificationUpdateManyMutationInputObjectSchema, where: ClassificationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ClassificationUpdateManyArgs>;

export const ClassificationUpdateManyZodSchema = z.object({ data: ClassificationUpdateManyMutationInputObjectSchema, where: ClassificationWhereInputObjectSchema.optional() }).strict();