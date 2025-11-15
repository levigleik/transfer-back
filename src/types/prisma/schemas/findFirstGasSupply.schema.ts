import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasSupplyIncludeObjectSchema as GasSupplyIncludeObjectSchema } from './objects/GasSupplyInclude.schema';
import { GasSupplyOrderByWithRelationInputObjectSchema as GasSupplyOrderByWithRelationInputObjectSchema } from './objects/GasSupplyOrderByWithRelationInput.schema';
import { GasSupplyWhereInputObjectSchema as GasSupplyWhereInputObjectSchema } from './objects/GasSupplyWhereInput.schema';
import { GasSupplyWhereUniqueInputObjectSchema as GasSupplyWhereUniqueInputObjectSchema } from './objects/GasSupplyWhereUniqueInput.schema';
import { GasSupplyScalarFieldEnumSchema } from './enums/GasSupplyScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GasSupplyFindFirstSelectSchema: z.ZodType<Prisma.GasSupplySelect> = z.object({
    id: z.boolean().optional(),
    kmToReview: z.boolean().optional(),
    kmToStop: z.boolean().optional(),
    quantity: z.boolean().optional(),
    supplyAt: z.boolean().optional(),
    totalPrice: z.boolean().optional(),
    gas: z.boolean().optional(),
    gasId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.GasSupplySelect>;

export const GasSupplyFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    kmToReview: z.boolean().optional(),
    kmToStop: z.boolean().optional(),
    quantity: z.boolean().optional(),
    supplyAt: z.boolean().optional(),
    totalPrice: z.boolean().optional(),
    gas: z.boolean().optional(),
    gasId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const GasSupplyFindFirstSchema: z.ZodType<Prisma.GasSupplyFindFirstArgs> = z.object({ select: GasSupplyFindFirstSelectSchema.optional(), include: z.lazy(() => GasSupplyIncludeObjectSchema.optional()), orderBy: z.union([GasSupplyOrderByWithRelationInputObjectSchema, GasSupplyOrderByWithRelationInputObjectSchema.array()]).optional(), where: GasSupplyWhereInputObjectSchema.optional(), cursor: GasSupplyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GasSupplyScalarFieldEnumSchema, GasSupplyScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.GasSupplyFindFirstArgs>;

export const GasSupplyFindFirstZodSchema = z.object({ select: GasSupplyFindFirstSelectSchema.optional(), include: z.lazy(() => GasSupplyIncludeObjectSchema.optional()), orderBy: z.union([GasSupplyOrderByWithRelationInputObjectSchema, GasSupplyOrderByWithRelationInputObjectSchema.array()]).optional(), where: GasSupplyWhereInputObjectSchema.optional(), cursor: GasSupplyWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GasSupplyScalarFieldEnumSchema, GasSupplyScalarFieldEnumSchema.array()]).optional() }).strict();