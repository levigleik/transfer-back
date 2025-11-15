import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasStationOrderByWithRelationInputObjectSchema as GasStationOrderByWithRelationInputObjectSchema } from './objects/GasStationOrderByWithRelationInput.schema';
import { GasStationWhereInputObjectSchema as GasStationWhereInputObjectSchema } from './objects/GasStationWhereInput.schema';
import { GasStationWhereUniqueInputObjectSchema as GasStationWhereUniqueInputObjectSchema } from './objects/GasStationWhereUniqueInput.schema';
import { GasStationScalarFieldEnumSchema } from './enums/GasStationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GasStationFindManySelectSchema: z.ZodType<Prisma.GasStationSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.GasStationSelect>;

export const GasStationFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const GasStationFindManySchema: z.ZodType<Prisma.GasStationFindManyArgs> = z.object({ select: GasStationFindManySelectSchema.optional(),  orderBy: z.union([GasStationOrderByWithRelationInputObjectSchema, GasStationOrderByWithRelationInputObjectSchema.array()]).optional(), where: GasStationWhereInputObjectSchema.optional(), cursor: GasStationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GasStationScalarFieldEnumSchema, GasStationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.GasStationFindManyArgs>;

export const GasStationFindManyZodSchema = z.object({ select: GasStationFindManySelectSchema.optional(),  orderBy: z.union([GasStationOrderByWithRelationInputObjectSchema, GasStationOrderByWithRelationInputObjectSchema.array()]).optional(), where: GasStationWhereInputObjectSchema.optional(), cursor: GasStationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GasStationScalarFieldEnumSchema, GasStationScalarFieldEnumSchema.array()]).optional() }).strict();