import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DocumentationSelectObjectSchema as DocumentationSelectObjectSchema } from './DocumentationSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DocumentationSelectObjectSchema).optional()
}).strict();
export const DocumentationArgsObjectSchema = makeSchema();
export const DocumentationArgsObjectZodSchema = makeSchema();
