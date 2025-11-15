import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasOrderByWithRelationInputObjectSchema as GasOrderByWithRelationInputObjectSchema } from './objects/GasOrderByWithRelationInput.schema';
import { GasWhereInputObjectSchema as GasWhereInputObjectSchema } from './objects/GasWhereInput.schema';
import { GasWhereUniqueInputObjectSchema as GasWhereUniqueInputObjectSchema } from './objects/GasWhereUniqueInput.schema';
import { GasCountAggregateInputObjectSchema as GasCountAggregateInputObjectSchema } from './objects/GasCountAggregateInput.schema';
import { GasMinAggregateInputObjectSchema as GasMinAggregateInputObjectSchema } from './objects/GasMinAggregateInput.schema';
import { GasMaxAggregateInputObjectSchema as GasMaxAggregateInputObjectSchema } from './objects/GasMaxAggregateInput.schema';
import { GasAvgAggregateInputObjectSchema as GasAvgAggregateInputObjectSchema } from './objects/GasAvgAggregateInput.schema';
import { GasSumAggregateInputObjectSchema as GasSumAggregateInputObjectSchema } from './objects/GasSumAggregateInput.schema';

export const GasAggregateSchema: z.ZodType<Prisma.GasAggregateArgs> = z.object({ orderBy: z.union([GasOrderByWithRelationInputObjectSchema, GasOrderByWithRelationInputObjectSchema.array()]).optional(), where: GasWhereInputObjectSchema.optional(), cursor: GasWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), GasCountAggregateInputObjectSchema ]).optional(), _min: GasMinAggregateInputObjectSchema.optional(), _max: GasMaxAggregateInputObjectSchema.optional(), _avg: GasAvgAggregateInputObjectSchema.optional(), _sum: GasSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GasAggregateArgs>;

export const GasAggregateZodSchema = z.object({ orderBy: z.union([GasOrderByWithRelationInputObjectSchema, GasOrderByWithRelationInputObjectSchema.array()]).optional(), where: GasWhereInputObjectSchema.optional(), cursor: GasWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), GasCountAggregateInputObjectSchema ]).optional(), _min: GasMinAggregateInputObjectSchema.optional(), _max: GasMaxAggregateInputObjectSchema.optional(), _avg: GasAvgAggregateInputObjectSchema.optional(), _sum: GasSumAggregateInputObjectSchema.optional() }).strict();