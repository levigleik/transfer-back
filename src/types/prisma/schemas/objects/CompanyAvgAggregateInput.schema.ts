import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const CompanyAvgAggregateInputObjectSchema: z.ZodType<Prisma.CompanyAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CompanyAvgAggregateInputType>;
export const CompanyAvgAggregateInputObjectZodSchema = makeSchema();
