import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClassificationIncludeObjectSchema as ClassificationIncludeObjectSchema } from './objects/ClassificationInclude.schema';
import { ClassificationOrderByWithRelationInputObjectSchema as ClassificationOrderByWithRelationInputObjectSchema } from './objects/ClassificationOrderByWithRelationInput.schema';
import { ClassificationWhereInputObjectSchema as ClassificationWhereInputObjectSchema } from './objects/ClassificationWhereInput.schema';
import { ClassificationWhereUniqueInputObjectSchema as ClassificationWhereUniqueInputObjectSchema } from './objects/ClassificationWhereUniqueInput.schema';
import { ClassificationScalarFieldEnumSchema } from './enums/ClassificationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ClassificationFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ClassificationSelect> = z.object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    occurences: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ClassificationSelect>;

export const ClassificationFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    description: z.boolean().optional(),
    occurences: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ClassificationFindFirstOrThrowSchema: z.ZodType<Prisma.ClassificationFindFirstOrThrowArgs> = z.object({ select: ClassificationFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ClassificationIncludeObjectSchema.optional()), orderBy: z.union([ClassificationOrderByWithRelationInputObjectSchema, ClassificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClassificationWhereInputObjectSchema.optional(), cursor: ClassificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClassificationScalarFieldEnumSchema, ClassificationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ClassificationFindFirstOrThrowArgs>;

export const ClassificationFindFirstOrThrowZodSchema = z.object({ select: ClassificationFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ClassificationIncludeObjectSchema.optional()), orderBy: z.union([ClassificationOrderByWithRelationInputObjectSchema, ClassificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClassificationWhereInputObjectSchema.optional(), cursor: ClassificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ClassificationScalarFieldEnumSchema, ClassificationScalarFieldEnumSchema.array()]).optional() }).strict();