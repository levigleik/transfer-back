import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  expiryAt: z.boolean().optional(),
  antecipateRenewal: z.boolean().optional(),
  days: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const DocumentationSelectObjectSchema: z.ZodType<Prisma.DocumentationSelect> = makeSchema() as unknown as z.ZodType<Prisma.DocumentationSelect>;
export const DocumentationSelectObjectZodSchema = makeSchema();
