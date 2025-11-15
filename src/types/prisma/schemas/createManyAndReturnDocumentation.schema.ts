import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentationSelectObjectSchema as DocumentationSelectObjectSchema } from './objects/DocumentationSelect.schema';
import { DocumentationCreateManyInputObjectSchema as DocumentationCreateManyInputObjectSchema } from './objects/DocumentationCreateManyInput.schema';

export const DocumentationCreateManyAndReturnSchema: z.ZodType<Prisma.DocumentationCreateManyAndReturnArgs> = z.object({ select: DocumentationSelectObjectSchema.optional(), data: z.union([ DocumentationCreateManyInputObjectSchema, z.array(DocumentationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DocumentationCreateManyAndReturnArgs>;

export const DocumentationCreateManyAndReturnZodSchema = z.object({ select: DocumentationSelectObjectSchema.optional(), data: z.union([ DocumentationCreateManyInputObjectSchema, z.array(DocumentationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();