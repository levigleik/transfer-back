import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentationWhereInputObjectSchema as DocumentationWhereInputObjectSchema } from './objects/DocumentationWhereInput.schema';

export const DocumentationDeleteManySchema: z.ZodType<Prisma.DocumentationDeleteManyArgs> = z.object({ where: DocumentationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DocumentationDeleteManyArgs>;

export const DocumentationDeleteManyZodSchema = z.object({ where: DocumentationWhereInputObjectSchema.optional() }).strict();