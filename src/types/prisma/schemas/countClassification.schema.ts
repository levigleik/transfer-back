import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ClassificationOrderByWithRelationInputObjectSchema as ClassificationOrderByWithRelationInputObjectSchema } from './objects/ClassificationOrderByWithRelationInput.schema';
import { ClassificationWhereInputObjectSchema as ClassificationWhereInputObjectSchema } from './objects/ClassificationWhereInput.schema';
import { ClassificationWhereUniqueInputObjectSchema as ClassificationWhereUniqueInputObjectSchema } from './objects/ClassificationWhereUniqueInput.schema';
import { ClassificationCountAggregateInputObjectSchema as ClassificationCountAggregateInputObjectSchema } from './objects/ClassificationCountAggregateInput.schema';

export const ClassificationCountSchema: z.ZodType<Prisma.ClassificationCountArgs> = z.object({ orderBy: z.union([ClassificationOrderByWithRelationInputObjectSchema, ClassificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClassificationWhereInputObjectSchema.optional(), cursor: ClassificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ClassificationCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ClassificationCountArgs>;

export const ClassificationCountZodSchema = z.object({ orderBy: z.union([ClassificationOrderByWithRelationInputObjectSchema, ClassificationOrderByWithRelationInputObjectSchema.array()]).optional(), where: ClassificationWhereInputObjectSchema.optional(), cursor: ClassificationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ClassificationCountAggregateInputObjectSchema ]).optional() }).strict();