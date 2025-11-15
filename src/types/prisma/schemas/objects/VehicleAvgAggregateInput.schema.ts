import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  identifier: z.literal(true).optional(),
  review: z.literal(true).optional(),
  gasId: z.literal(true).optional(),
  brandId: z.literal(true).optional(),
  categoryId: z.literal(true).optional(),
  companyId: z.literal(true).optional()
}).strict();
export const VehicleAvgAggregateInputObjectSchema: z.ZodType<Prisma.VehicleAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VehicleAvgAggregateInputType>;
export const VehicleAvgAggregateInputObjectZodSchema = makeSchema();
