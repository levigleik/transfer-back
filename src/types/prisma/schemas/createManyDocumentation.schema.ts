import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentationCreateManyInputObjectSchema as DocumentationCreateManyInputObjectSchema } from './objects/DocumentationCreateManyInput.schema';

export const DocumentationCreateManySchema: z.ZodType<Prisma.DocumentationCreateManyArgs> = z.object({ data: z.union([ DocumentationCreateManyInputObjectSchema, z.array(DocumentationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.DocumentationCreateManyArgs>;

export const DocumentationCreateManyZodSchema = z.object({ data: z.union([ DocumentationCreateManyInputObjectSchema, z.array(DocumentationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();