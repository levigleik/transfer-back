import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasSupplyOrderByWithRelationInputObjectSchema as GasSupplyOrderByWithRelationInputObjectSchema } from './objects/GasSupplyOrderByWithRelationInput.schema';
import { GasSupplyWhereInputObjectSchema as GasSupplyWhereInputObjectSchema } from './objects/GasSupplyWhereInput.schema';
import { GasSupplyWhereUniqueInputObjectSchema as GasSupplyWhereUniqueInputObjectSchema } from './objects/GasSupplyWhereUniqueInput.schema';
import { GasSupplyCountAggregateInputObjectSchema as GasSupplyCountAggregateInputObjectSchema } from './objects/GasSupplyCountAggregateInput.schema';

export const GasSupplyCountSchema: z.ZodType<Prisma.GasSupplyCountArgs> = z.object({ orderBy: z.union([GasSupplyOrderByWithRelationInputObjectSchema, GasSupplyOrderByWithRelationInputObjectSchema.array()]).optional(), where: GasSupplyWhereInputObjectSchema.optional(), cursor: GasSupplyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GasSupplyCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.GasSupplyCountArgs>;

export const GasSupplyCountZodSchema = z.object({ orderBy: z.union([GasSupplyOrderByWithRelationInputObjectSchema, GasSupplyOrderByWithRelationInputObjectSchema.array()]).optional(), where: GasSupplyWhereInputObjectSchema.optional(), cursor: GasSupplyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GasSupplyCountAggregateInputObjectSchema ]).optional() }).strict();