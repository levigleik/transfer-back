import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentationSelectObjectSchema as DocumentationSelectObjectSchema } from './objects/DocumentationSelect.schema';
import { DocumentationUpdateInputObjectSchema as DocumentationUpdateInputObjectSchema } from './objects/DocumentationUpdateInput.schema';
import { DocumentationUncheckedUpdateInputObjectSchema as DocumentationUncheckedUpdateInputObjectSchema } from './objects/DocumentationUncheckedUpdateInput.schema';
import { DocumentationWhereUniqueInputObjectSchema as DocumentationWhereUniqueInputObjectSchema } from './objects/DocumentationWhereUniqueInput.schema';

export const DocumentationUpdateOneSchema: z.ZodType<Prisma.DocumentationUpdateArgs> = z.object({ select: DocumentationSelectObjectSchema.optional(),  data: z.union([DocumentationUpdateInputObjectSchema, DocumentationUncheckedUpdateInputObjectSchema]), where: DocumentationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DocumentationUpdateArgs>;

export const DocumentationUpdateOneZodSchema = z.object({ select: DocumentationSelectObjectSchema.optional(),  data: z.union([DocumentationUpdateInputObjectSchema, DocumentationUncheckedUpdateInputObjectSchema]), where: DocumentationWhereUniqueInputObjectSchema }).strict();