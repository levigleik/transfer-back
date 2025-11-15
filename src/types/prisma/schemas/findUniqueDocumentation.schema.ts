import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentationSelectObjectSchema as DocumentationSelectObjectSchema } from './objects/DocumentationSelect.schema';
import { DocumentationWhereUniqueInputObjectSchema as DocumentationWhereUniqueInputObjectSchema } from './objects/DocumentationWhereUniqueInput.schema';

export const DocumentationFindUniqueSchema: z.ZodType<Prisma.DocumentationFindUniqueArgs> = z.object({ select: DocumentationSelectObjectSchema.optional(),  where: DocumentationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DocumentationFindUniqueArgs>;

export const DocumentationFindUniqueZodSchema = z.object({ select: DocumentationSelectObjectSchema.optional(),  where: DocumentationWhereUniqueInputObjectSchema }).strict();