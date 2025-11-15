import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OccurenceIncludeObjectSchema as OccurenceIncludeObjectSchema } from './objects/OccurenceInclude.schema';
import { OccurenceOrderByWithRelationInputObjectSchema as OccurenceOrderByWithRelationInputObjectSchema } from './objects/OccurenceOrderByWithRelationInput.schema';
import { OccurenceWhereInputObjectSchema as OccurenceWhereInputObjectSchema } from './objects/OccurenceWhereInput.schema';
import { OccurenceWhereUniqueInputObjectSchema as OccurenceWhereUniqueInputObjectSchema } from './objects/OccurenceWhereUniqueInput.schema';
import { OccurenceScalarFieldEnumSchema } from './enums/OccurenceScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OccurenceFindFirstOrThrowSelectSchema: z.ZodType<Prisma.OccurenceSelect> = z.object({
    id: z.boolean().optional(),
    date: z.boolean().optional(),
    description: z.boolean().optional(),
    seriousness: z.boolean().optional(),
    seriousnessId: z.boolean().optional(),
    classification: z.boolean().optional(),
    classificationId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.OccurenceSelect>;

export const OccurenceFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    date: z.boolean().optional(),
    description: z.boolean().optional(),
    seriousness: z.boolean().optional(),
    seriousnessId: z.boolean().optional(),
    classification: z.boolean().optional(),
    classificationId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const OccurenceFindFirstOrThrowSchema: z.ZodType<Prisma.OccurenceFindFirstOrThrowArgs> = z.object({ select: OccurenceFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => OccurenceIncludeObjectSchema.optional()), orderBy: z.union([OccurenceOrderByWithRelationInputObjectSchema, OccurenceOrderByWithRelationInputObjectSchema.array()]).optional(), where: OccurenceWhereInputObjectSchema.optional(), cursor: OccurenceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OccurenceScalarFieldEnumSchema, OccurenceScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.OccurenceFindFirstOrThrowArgs>;

export const OccurenceFindFirstOrThrowZodSchema = z.object({ select: OccurenceFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => OccurenceIncludeObjectSchema.optional()), orderBy: z.union([OccurenceOrderByWithRelationInputObjectSchema, OccurenceOrderByWithRelationInputObjectSchema.array()]).optional(), where: OccurenceWhereInputObjectSchema.optional(), cursor: OccurenceWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OccurenceScalarFieldEnumSchema, OccurenceScalarFieldEnumSchema.array()]).optional() }).strict();