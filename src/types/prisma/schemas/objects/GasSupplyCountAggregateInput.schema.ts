import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  kmToReview: z.literal(true).optional(),
  kmToStop: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  supplyAt: z.literal(true).optional(),
  totalPrice: z.literal(true).optional(),
  gasId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const GasSupplyCountAggregateInputObjectSchema: z.ZodType<Prisma.GasSupplyCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyCountAggregateInputType>;
export const GasSupplyCountAggregateInputObjectZodSchema = makeSchema();
