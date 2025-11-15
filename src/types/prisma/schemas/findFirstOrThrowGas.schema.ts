import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasIncludeObjectSchema as GasIncludeObjectSchema } from './objects/GasInclude.schema';
import { GasOrderByWithRelationInputObjectSchema as GasOrderByWithRelationInputObjectSchema } from './objects/GasOrderByWithRelationInput.schema';
import { GasWhereInputObjectSchema as GasWhereInputObjectSchema } from './objects/GasWhereInput.schema';
import { GasWhereUniqueInputObjectSchema as GasWhereUniqueInputObjectSchema } from './objects/GasWhereUniqueInput.schema';
import { GasScalarFieldEnumSchema } from './enums/GasScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GasFindFirstOrThrowSelectSchema: z.ZodType<Prisma.GasSelect> = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    vehicle: z.boolean().optional(),
    gasSupplies: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.GasSelect>;

export const GasFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    vehicle: z.boolean().optional(),
    gasSupplies: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const GasFindFirstOrThrowSchema: z.ZodType<Prisma.GasFindFirstOrThrowArgs> = z.object({ select: GasFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => GasIncludeObjectSchema.optional()), orderBy: z.union([GasOrderByWithRelationInputObjectSchema, GasOrderByWithRelationInputObjectSchema.array()]).optional(), where: GasWhereInputObjectSchema.optional(), cursor: GasWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GasScalarFieldEnumSchema, GasScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.GasFindFirstOrThrowArgs>;

export const GasFindFirstOrThrowZodSchema = z.object({ select: GasFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => GasIncludeObjectSchema.optional()), orderBy: z.union([GasOrderByWithRelationInputObjectSchema, GasOrderByWithRelationInputObjectSchema.array()]).optional(), where: GasWhereInputObjectSchema.optional(), cursor: GasWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GasScalarFieldEnumSchema, GasScalarFieldEnumSchema.array()]).optional() }).strict();