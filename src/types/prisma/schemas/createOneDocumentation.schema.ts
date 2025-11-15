import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentationSelectObjectSchema as DocumentationSelectObjectSchema } from './objects/DocumentationSelect.schema';
import { DocumentationCreateInputObjectSchema as DocumentationCreateInputObjectSchema } from './objects/DocumentationCreateInput.schema';
import { DocumentationUncheckedCreateInputObjectSchema as DocumentationUncheckedCreateInputObjectSchema } from './objects/DocumentationUncheckedCreateInput.schema';

export const DocumentationCreateOneSchema: z.ZodType<Prisma.DocumentationCreateArgs> = z.object({ select: DocumentationSelectObjectSchema.optional(),  data: z.union([DocumentationCreateInputObjectSchema, DocumentationUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DocumentationCreateArgs>;

export const DocumentationCreateOneZodSchema = z.object({ select: DocumentationSelectObjectSchema.optional(),  data: z.union([DocumentationCreateInputObjectSchema, DocumentationUncheckedCreateInputObjectSchema]) }).strict();