import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentationOrderByWithRelationInputObjectSchema as DocumentationOrderByWithRelationInputObjectSchema } from './objects/DocumentationOrderByWithRelationInput.schema';
import { DocumentationWhereInputObjectSchema as DocumentationWhereInputObjectSchema } from './objects/DocumentationWhereInput.schema';
import { DocumentationWhereUniqueInputObjectSchema as DocumentationWhereUniqueInputObjectSchema } from './objects/DocumentationWhereUniqueInput.schema';
import { DocumentationCountAggregateInputObjectSchema as DocumentationCountAggregateInputObjectSchema } from './objects/DocumentationCountAggregateInput.schema';

export const DocumentationCountSchema: z.ZodType<Prisma.DocumentationCountArgs> = z.object({ orderBy: z.union([DocumentationOrderByWithRelationInputObjectSchema, DocumentationOrderByWithRelationInputObjectSchema.array()]).optional(), where: DocumentationWhereInputObjectSchema.optional(), cursor: DocumentationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DocumentationCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.DocumentationCountArgs>;

export const DocumentationCountZodSchema = z.object({ orderBy: z.union([DocumentationOrderByWithRelationInputObjectSchema, DocumentationOrderByWithRelationInputObjectSchema.array()]).optional(), where: DocumentationWhereInputObjectSchema.optional(), cursor: DocumentationWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), DocumentationCountAggregateInputObjectSchema ]).optional() }).strict();