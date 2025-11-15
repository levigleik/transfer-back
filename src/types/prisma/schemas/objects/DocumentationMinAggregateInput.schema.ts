import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  type: z.literal(true).optional(),
  expiryAt: z.literal(true).optional(),
  antecipateRenewal: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const DocumentationMinAggregateInputObjectSchema: z.ZodType<Prisma.DocumentationMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.DocumentationMinAggregateInputType>;
export const DocumentationMinAggregateInputObjectZodSchema = makeSchema();
