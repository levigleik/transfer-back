import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasStationOrderByWithRelationInputObjectSchema as GasStationOrderByWithRelationInputObjectSchema } from './objects/GasStationOrderByWithRelationInput.schema';
import { GasStationWhereInputObjectSchema as GasStationWhereInputObjectSchema } from './objects/GasStationWhereInput.schema';
import { GasStationWhereUniqueInputObjectSchema as GasStationWhereUniqueInputObjectSchema } from './objects/GasStationWhereUniqueInput.schema';
import { GasStationCountAggregateInputObjectSchema as GasStationCountAggregateInputObjectSchema } from './objects/GasStationCountAggregateInput.schema';

export const GasStationCountSchema: z.ZodType<Prisma.GasStationCountArgs> = z.object({ orderBy: z.union([GasStationOrderByWithRelationInputObjectSchema, GasStationOrderByWithRelationInputObjectSchema.array()]).optional(), where: GasStationWhereInputObjectSchema.optional(), cursor: GasStationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GasStationCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.GasStationCountArgs>;

export const GasStationCountZodSchema = z.object({ orderBy: z.union([GasStationOrderByWithRelationInputObjectSchema, GasStationOrderByWithRelationInputObjectSchema.array()]).optional(), where: GasStationWhereInputObjectSchema.optional(), cursor: GasStationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GasStationCountAggregateInputObjectSchema ]).optional() }).strict();