import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { CompanyOrderByWithRelationInputObjectSchema as CompanyOrderByWithRelationInputObjectSchema } from './objects/CompanyOrderByWithRelationInput.schema';
import { CompanyWhereInputObjectSchema as CompanyWhereInputObjectSchema } from './objects/CompanyWhereInput.schema';
import { CompanyWhereUniqueInputObjectSchema as CompanyWhereUniqueInputObjectSchema } from './objects/CompanyWhereUniqueInput.schema';
import { CompanyCountAggregateInputObjectSchema as CompanyCountAggregateInputObjectSchema } from './objects/CompanyCountAggregateInput.schema';
import { CompanyMinAggregateInputObjectSchema as CompanyMinAggregateInputObjectSchema } from './objects/CompanyMinAggregateInput.schema';
import { CompanyMaxAggregateInputObjectSchema as CompanyMaxAggregateInputObjectSchema } from './objects/CompanyMaxAggregateInput.schema';
import { CompanyAvgAggregateInputObjectSchema as CompanyAvgAggregateInputObjectSchema } from './objects/CompanyAvgAggregateInput.schema';
import { CompanySumAggregateInputObjectSchema as CompanySumAggregateInputObjectSchema } from './objects/CompanySumAggregateInput.schema';

export const CompanyAggregateSchema: z.ZodType<Prisma.CompanyAggregateArgs> = z.object({ orderBy: z.union([CompanyOrderByWithRelationInputObjectSchema, CompanyOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompanyWhereInputObjectSchema.optional(), cursor: CompanyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CompanyCountAggregateInputObjectSchema ]).optional(), _min: CompanyMinAggregateInputObjectSchema.optional(), _max: CompanyMaxAggregateInputObjectSchema.optional(), _avg: CompanyAvgAggregateInputObjectSchema.optional(), _sum: CompanySumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.CompanyAggregateArgs>;

export const CompanyAggregateZodSchema = z.object({ orderBy: z.union([CompanyOrderByWithRelationInputObjectSchema, CompanyOrderByWithRelationInputObjectSchema.array()]).optional(), where: CompanyWhereInputObjectSchema.optional(), cursor: CompanyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), CompanyCountAggregateInputObjectSchema ]).optional(), _min: CompanyMinAggregateInputObjectSchema.optional(), _max: CompanyMaxAggregateInputObjectSchema.optional(), _avg: CompanyAvgAggregateInputObjectSchema.optional(), _sum: CompanySumAggregateInputObjectSchema.optional() }).strict();