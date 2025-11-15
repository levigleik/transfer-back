import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeriousnessOrderByWithRelationInputObjectSchema as SeriousnessOrderByWithRelationInputObjectSchema } from './objects/SeriousnessOrderByWithRelationInput.schema';
import { SeriousnessWhereInputObjectSchema as SeriousnessWhereInputObjectSchema } from './objects/SeriousnessWhereInput.schema';
import { SeriousnessWhereUniqueInputObjectSchema as SeriousnessWhereUniqueInputObjectSchema } from './objects/SeriousnessWhereUniqueInput.schema';
import { SeriousnessCountAggregateInputObjectSchema as SeriousnessCountAggregateInputObjectSchema } from './objects/SeriousnessCountAggregateInput.schema';

export const SeriousnessCountSchema: z.ZodType<Prisma.SeriousnessCountArgs> = z.object({ orderBy: z.union([SeriousnessOrderByWithRelationInputObjectSchema, SeriousnessOrderByWithRelationInputObjectSchema.array()]).optional(), where: SeriousnessWhereInputObjectSchema.optional(), cursor: SeriousnessWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SeriousnessCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SeriousnessCountArgs>;

export const SeriousnessCountZodSchema = z.object({ orderBy: z.union([SeriousnessOrderByWithRelationInputObjectSchema, SeriousnessOrderByWithRelationInputObjectSchema.array()]).optional(), where: SeriousnessWhereInputObjectSchema.optional(), cursor: SeriousnessWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SeriousnessCountAggregateInputObjectSchema ]).optional() }).strict();