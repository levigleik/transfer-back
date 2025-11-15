import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentationOrderByWithRelationInputObjectSchema as DocumentationOrderByWithRelationInputObjectSchema } from './objects/DocumentationOrderByWithRelationInput.schema';
import { DocumentationWhereInputObjectSchema as DocumentationWhereInputObjectSchema } from './objects/DocumentationWhereInput.schema';
import { DocumentationWhereUniqueInputObjectSchema as DocumentationWhereUniqueInputObjectSchema } from './objects/DocumentationWhereUniqueInput.schema';
import { DocumentationScalarFieldEnumSchema } from './enums/DocumentationScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DocumentationFindFirstOrThrowSelectSchema: z.ZodType<Prisma.DocumentationSelect> = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    expiryAt: z.boolean().optional(),
    antecipateRenewal: z.boolean().optional(),
    days: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.DocumentationSelect>;

export const DocumentationFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    expiryAt: z.boolean().optional(),
    antecipateRenewal: z.boolean().optional(),
    days: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const DocumentationFindFirstOrThrowSchema: z.ZodType<Prisma.DocumentationFindFirstOrThrowArgs> = z.object({ select: DocumentationFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([DocumentationOrderByWithRelationInputObjectSchema, DocumentationOrderByWithRelationInputObjectSchema.array()]).optional(), where: DocumentationWhereInputObjectSchema.optional(), cursor: DocumentationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DocumentationScalarFieldEnumSchema, DocumentationScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.DocumentationFindFirstOrThrowArgs>;

export const DocumentationFindFirstOrThrowZodSchema = z.object({ select: DocumentationFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([DocumentationOrderByWithRelationInputObjectSchema, DocumentationOrderByWithRelationInputObjectSchema.array()]).optional(), where: DocumentationWhereInputObjectSchema.optional(), cursor: DocumentationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([DocumentationScalarFieldEnumSchema, DocumentationScalarFieldEnumSchema.array()]).optional() }).strict();