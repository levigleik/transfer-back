import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasArgsObjectSchema as GasArgsObjectSchema } from './GasArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  kmToReview: z.boolean().optional(),
  kmToStop: z.boolean().optional(),
  quantity: z.boolean().optional(),
  supplyAt: z.boolean().optional(),
  totalPrice: z.boolean().optional(),
  gas: z.union([z.boolean(), z.lazy(() => GasArgsObjectSchema)]).optional(),
  gasId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const GasSupplySelectObjectSchema: z.ZodType<Prisma.GasSupplySelect> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplySelect>;
export const GasSupplySelectObjectZodSchema = makeSchema();
