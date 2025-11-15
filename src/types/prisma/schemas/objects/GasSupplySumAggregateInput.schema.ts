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
export const GasSupplySumAggregateInputObjectSchema: z.ZodType<Prisma.GasSupplySumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplySumAggregateInputType>;
export const GasSupplySumAggregateInputObjectZodSchema = makeSchema();
