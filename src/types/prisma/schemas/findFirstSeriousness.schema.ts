import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeriousnessIncludeObjectSchema as SeriousnessIncludeObjectSchema } from './objects/SeriousnessInclude.schema';
import { SeriousnessOrderByWithRelationInputObjectSchema as SeriousnessOrderByWithRelationInputObjectSchema } from './objects/SeriousnessOrderByWithRelationInput.schema';
import { SeriousnessWhereInputObjectSchema as SeriousnessWhereInputObjectSchema } from './objects/SeriousnessWhereInput.schema';
import { SeriousnessWhereUniqueInputObjectSchema as SeriousnessWhereUniqueInputObjectSchema } from './objects/SeriousnessWhereUniqueInput.schema';
import { SeriousnessScalarFieldEnumSchema } from './enums/SeriousnessScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SeriousnessFindFirstSelectSchema: z.ZodType<Prisma.SeriousnessSelect> = z.object({
    id: z.boolean().optional(),
    level: z.boolean().optional(),
    occurences: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SeriousnessSelect>;

export const SeriousnessFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    level: z.boolean().optional(),
    occurences: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const SeriousnessFindFirstSchema: z.ZodType<Prisma.SeriousnessFindFirstArgs> = z.object({ select: SeriousnessFindFirstSelectSchema.optional(), include: z.lazy(() => SeriousnessIncludeObjectSchema.optional()), orderBy: z.union([SeriousnessOrderByWithRelationInputObjectSchema, SeriousnessOrderByWithRelationInputObjectSchema.array()]).optional(), where: SeriousnessWhereInputObjectSchema.optional(), cursor: SeriousnessWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SeriousnessScalarFieldEnumSchema, SeriousnessScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SeriousnessFindFirstArgs>;

export const SeriousnessFindFirstZodSchema = z.object({ select: SeriousnessFindFirstSelectSchema.optional(), include: z.lazy(() => SeriousnessIncludeObjectSchema.optional()), orderBy: z.union([SeriousnessOrderByWithRelationInputObjectSchema, SeriousnessOrderByWithRelationInputObjectSchema.array()]).optional(), where: SeriousnessWhereInputObjectSchema.optional(), cursor: SeriousnessWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SeriousnessScalarFieldEnumSchema, SeriousnessScalarFieldEnumSchema.array()]).optional() }).strict();