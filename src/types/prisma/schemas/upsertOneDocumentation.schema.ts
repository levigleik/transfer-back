import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentationSelectObjectSchema as DocumentationSelectObjectSchema } from './objects/DocumentationSelect.schema';
import { DocumentationWhereUniqueInputObjectSchema as DocumentationWhereUniqueInputObjectSchema } from './objects/DocumentationWhereUniqueInput.schema';
import { DocumentationCreateInputObjectSchema as DocumentationCreateInputObjectSchema } from './objects/DocumentationCreateInput.schema';
import { DocumentationUncheckedCreateInputObjectSchema as DocumentationUncheckedCreateInputObjectSchema } from './objects/DocumentationUncheckedCreateInput.schema';
import { DocumentationUpdateInputObjectSchema as DocumentationUpdateInputObjectSchema } from './objects/DocumentationUpdateInput.schema';
import { DocumentationUncheckedUpdateInputObjectSchema as DocumentationUncheckedUpdateInputObjectSchema } from './objects/DocumentationUncheckedUpdateInput.schema';

export const DocumentationUpsertOneSchema: z.ZodType<Prisma.DocumentationUpsertArgs> = z.object({ select: DocumentationSelectObjectSchema.optional(),  where: DocumentationWhereUniqueInputObjectSchema, create: z.union([ DocumentationCreateInputObjectSchema, DocumentationUncheckedCreateInputObjectSchema ]), update: z.union([ DocumentationUpdateInputObjectSchema, DocumentationUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DocumentationUpsertArgs>;

export const DocumentationUpsertOneZodSchema = z.object({ select: DocumentationSelectObjectSchema.optional(),  where: DocumentationWhereUniqueInputObjectSchema, create: z.union([ DocumentationCreateInputObjectSchema, DocumentationUncheckedCreateInputObjectSchema ]), update: z.union([ DocumentationUpdateInputObjectSchema, DocumentationUncheckedUpdateInputObjectSchema ]) }).strict();