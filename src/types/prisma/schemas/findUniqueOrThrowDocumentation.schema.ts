import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentationSelectObjectSchema as DocumentationSelectObjectSchema } from './objects/DocumentationSelect.schema';
import { DocumentationWhereUniqueInputObjectSchema as DocumentationWhereUniqueInputObjectSchema } from './objects/DocumentationWhereUniqueInput.schema';

export const DocumentationFindUniqueOrThrowSchema: z.ZodType<Prisma.DocumentationFindUniqueOrThrowArgs> = z.object({ select: DocumentationSelectObjectSchema.optional(),  where: DocumentationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DocumentationFindUniqueOrThrowArgs>;

export const DocumentationFindUniqueOrThrowZodSchema = z.object({ select: DocumentationSelectObjectSchema.optional(),  where: DocumentationWhereUniqueInputObjectSchema }).strict();