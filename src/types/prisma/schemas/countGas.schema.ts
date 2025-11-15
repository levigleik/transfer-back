import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasOrderByWithRelationInputObjectSchema as GasOrderByWithRelationInputObjectSchema } from './objects/GasOrderByWithRelationInput.schema';
import { GasWhereInputObjectSchema as GasWhereInputObjectSchema } from './objects/GasWhereInput.schema';
import { GasWhereUniqueInputObjectSchema as GasWhereUniqueInputObjectSchema } from './objects/GasWhereUniqueInput.schema';
import { GasCountAggregateInputObjectSchema as GasCountAggregateInputObjectSchema } from './objects/GasCountAggregateInput.schema';

export const GasCountSchema: z.ZodType<Prisma.GasCountArgs> = z.object({ orderBy: z.union([GasOrderByWithRelationInputObjectSchema, GasOrderByWithRelationInputObjectSchema.array()]).optional(), where: GasWhereInputObjectSchema.optional(), cursor: GasWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GasCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.GasCountArgs>;

export const GasCountZodSchema = z.object({ orderBy: z.union([GasOrderByWithRelationInputObjectSchema, GasOrderByWithRelationInputObjectSchema.array()]).optional(), where: GasWhereInputObjectSchema.optional(), cursor: GasWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GasCountAggregateInputObjectSchema ]).optional() }).strict();