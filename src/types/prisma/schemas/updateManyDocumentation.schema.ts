import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentationUpdateManyMutationInputObjectSchema as DocumentationUpdateManyMutationInputObjectSchema } from './objects/DocumentationUpdateManyMutationInput.schema';
import { DocumentationWhereInputObjectSchema as DocumentationWhereInputObjectSchema } from './objects/DocumentationWhereInput.schema';

export const DocumentationUpdateManySchema: z.ZodType<Prisma.DocumentationUpdateManyArgs> = z.object({ data: DocumentationUpdateManyMutationInputObjectSchema, where: DocumentationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DocumentationUpdateManyArgs>;

export const DocumentationUpdateManyZodSchema = z.object({ data: DocumentationUpdateManyMutationInputObjectSchema, where: DocumentationWhereInputObjectSchema.optional() }).strict();