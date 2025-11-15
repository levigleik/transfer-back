import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  kmToReview: z.literal(true).optional(),
  kmToStop: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  totalPrice: z.literal(true).optional(),
  gasId: z.literal(true).optional()
}).strict();
export const GasSupplyAvgAggregateInputObjectSchema: z.ZodType<Prisma.GasSupplyAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyAvgAggregateInputType>;
export const GasSupplyAvgAggregateInputObjectZodSchema = makeSchema();
