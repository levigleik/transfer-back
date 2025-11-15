import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentationCreatedaysInputObjectSchema as DocumentationCreatedaysInputObjectSchema } from './DocumentationCreatedaysInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  type: z.string(),
  expiryAt: z.coerce.date(),
  antecipateRenewal: z.boolean().optional(),
  days: z.union([z.lazy(() => DocumentationCreatedaysInputObjectSchema), z.string().array()]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const DocumentationCreateManyInputObjectSchema: z.ZodType<Prisma.DocumentationCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentationCreateManyInput>;
export const DocumentationCreateManyInputObjectZodSchema = makeSchema();
