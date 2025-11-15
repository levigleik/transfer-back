import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const DocumentationCreatedaysInputObjectSchema: z.ZodType<Prisma.DocumentationCreatedaysInput> = makeSchema() as unknown as z.ZodType<Prisma.DocumentationCreatedaysInput>;
export const DocumentationCreatedaysInputObjectZodSchema = makeSchema();
