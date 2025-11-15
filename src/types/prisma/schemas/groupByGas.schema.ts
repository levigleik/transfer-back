import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasWhereInputObjectSchema as GasWhereInputObjectSchema } from './objects/GasWhereInput.schema';
import { GasOrderByWithAggregationInputObjectSchema as GasOrderByWithAggregationInputObjectSchema } from './objects/GasOrderByWithAggregationInput.schema';
import { GasScalarWhereWithAggregatesInputObjectSchema as GasScalarWhereWithAggregatesInputObjectSchema } from './objects/GasScalarWhereWithAggregatesInput.schema';
import { GasScalarFieldEnumSchema } from './enums/GasScalarFieldEnum.schema';
import { GasCountAggregateInputObjectSchema as GasCountAggregateInputObjectSchema } from './objects/GasCountAggregateInput.schema';
import { GasMinAggregateInputObjectSchema as GasMinAggregateInputObjectSchema } from './objects/GasMinAggregateInput.schema';
import { GasMaxAggregateInputObjectSchema as GasMaxAggregateInputObjectSchema } from './objects/GasMaxAggregateInput.schema';
import { GasAvgAggregateInputObjectSchema as GasAvgAggregateInputObjectSchema } from './objects/GasAvgAggregateInput.schema';
import { GasSumAggregateInputObjectSchema as GasSumAggregateInputObjectSchema } from './objects/GasSumAggregateInput.schema';

export const GasGroupBySchema: z.ZodType<Prisma.GasGroupByArgs> = z.object({ where: GasWhereInputObjectSchema.optional(), orderBy: z.union([GasOrderByWithAggregationInputObjectSchema, GasOrderByWithAggregationInputObjectSchema.array()]).optional(), having: GasScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(GasScalarFieldEnumSchema), _count: z.union([ z.literal(true), GasCountAggregateInputObjectSchema ]).optional(), _min: GasMinAggregateInputObjectSchema.optional(), _max: GasMaxAggregateInputObjectSchema.optional(), _avg: GasAvgAggregateInputObjectSchema.optional(), _sum: GasSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GasGroupByArgs>;

export const GasGroupByZodSchema = z.object({ where: GasWhereInputObjectSchema.optional(), orderBy: z.union([GasOrderByWithAggregationInputObjectSchema, GasOrderByWithAggregationInputObjectSchema.array()]).optional(), having: GasScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(GasScalarFieldEnumSchema), _count: z.union([ z.literal(true), GasCountAggregateInputObjectSchema ]).optional(), _min: GasMinAggregateInputObjectSchema.optional(), _max: GasMaxAggregateInputObjectSchema.optional(), _avg: GasAvgAggregateInputObjectSchema.optional(), _sum: GasSumAggregateInputObjectSchema.optional() }).strict();