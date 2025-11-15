import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OccurenceOrderByWithRelationInputObjectSchema as OccurenceOrderByWithRelationInputObjectSchema } from './objects/OccurenceOrderByWithRelationInput.schema';
import { OccurenceWhereInputObjectSchema as OccurenceWhereInputObjectSchema } from './objects/OccurenceWhereInput.schema';
import { OccurenceWhereUniqueInputObjectSchema as OccurenceWhereUniqueInputObjectSchema } from './objects/OccurenceWhereUniqueInput.schema';
import { OccurenceCountAggregateInputObjectSchema as OccurenceCountAggregateInputObjectSchema } from './objects/OccurenceCountAggregateInput.schema';

export const OccurenceCountSchema: z.ZodType<Prisma.OccurenceCountArgs> = z.object({ orderBy: z.union([OccurenceOrderByWithRelationInputObjectSchema, OccurenceOrderByWithRelationInputObjectSchema.array()]).optional(), where: OccurenceWhereInputObjectSchema.optional(), cursor: OccurenceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OccurenceCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.OccurenceCountArgs>;

export const OccurenceCountZodSchema = z.object({ orderBy: z.union([OccurenceOrderByWithRelationInputObjectSchema, OccurenceOrderByWithRelationInputObjectSchema.array()]).optional(), where: OccurenceWhereInputObjectSchema.optional(), cursor: OccurenceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), OccurenceCountAggregateInputObjectSchema ]).optional() }).strict();