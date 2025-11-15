import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentationCreatedaysInputObjectSchema as DocumentationCreatedaysInputObjectSchema } from './DocumentationCreatedaysInput.schema'

const makeSchema = () => z.object({
  type: z.string(),
  expiryAt: z.coerce.date(),
  antecipateRenewal: z.boolean().optional(),
  days: z.union([z.lazy(() => DocumentationCreatedaysInputObjectSchema), z.string().array()]),
  createdAt: z.coerce.date().optional()
}).strict();
export const DocumentationCreateInputObjectSchema: z.ZodType<Prisma.DocumentationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentationCreateInput>;
export const DocumentationCreateInputObjectZodSchema = makeSchema();
