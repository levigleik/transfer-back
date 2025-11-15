import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { DocumentationSelectObjectSchema as DocumentationSelectObjectSchema } from './objects/DocumentationSelect.schema';
import { DocumentationUpdateManyMutationInputObjectSchema as DocumentationUpdateManyMutationInputObjectSchema } from './objects/DocumentationUpdateManyMutationInput.schema';
import { DocumentationWhereInputObjectSchema as DocumentationWhereInputObjectSchema } from './objects/DocumentationWhereInput.schema';

export const DocumentationUpdateManyAndReturnSchema: z.ZodType<Prisma.DocumentationUpdateManyAndReturnArgs> = z.object({ select: DocumentationSelectObjectSchema.optional(), data: DocumentationUpdateManyMutationInputObjectSchema, where: DocumentationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.DocumentationUpdateManyAndReturnArgs>;

export const DocumentationUpdateManyAndReturnZodSchema = z.object({ select: DocumentationSelectObjectSchema.optional(), data: DocumentationUpdateManyMutationInputObjectSchema, where: DocumentationWhereInputObjectSchema.optional() }).strict();