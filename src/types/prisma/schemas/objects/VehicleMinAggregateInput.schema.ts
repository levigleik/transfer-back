import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  identifier: z.literal(true).optional(),
  model: z.literal(true).optional(),
  year: z.literal(true).optional(),
  capacity: z.literal(true).optional(),
  doors: z.literal(true).optional(),
  uf: z.literal(true).optional(),
  plateType: z.literal(true).optional(),
  plate: z.literal(true).optional(),
  renavam: z.literal(true).optional(),
  chassis: z.literal(true).optional(),
  review: z.literal(true).optional(),
  description: z.literal(true).optional(),
  gasId: z.literal(true).optional(),
  brandId: z.literal(true).optional(),
  categoryId: z.literal(true).optional(),
  companyId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const VehicleMinAggregateInputObjectSchema: z.ZodType<Prisma.VehicleMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VehicleMinAggregateInputType>;
export const VehicleMinAggregateInputObjectZodSchema = makeSchema();
