import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GasOrderByWithRelationInputObjectSchema as GasOrderByWithRelationInputObjectSchema } from './GasOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  kmToReview: SortOrderSchema.optional(),
  kmToStop: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  supplyAt: SortOrderSchema.optional(),
  totalPrice: SortOrderSchema.optional(),
  gasId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  gas: z.lazy(() => GasOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const GasSupplyOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.GasSupplyOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyOrderByWithRelationInput>;
export const GasSupplyOrderByWithRelationInputObjectZodSchema = makeSchema();
