import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VehicleOrderByRelationAggregateInputObjectSchema as VehicleOrderByRelationAggregateInputObjectSchema } from './VehicleOrderByRelationAggregateInput.schema';
import { GasSupplyOrderByRelationAggregateInputObjectSchema as GasSupplyOrderByRelationAggregateInputObjectSchema } from './GasSupplyOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  vehicle: z.lazy(() => VehicleOrderByRelationAggregateInputObjectSchema).optional(),
  gasSupplies: z.lazy(() => GasSupplyOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const GasOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.GasOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.GasOrderByWithRelationInput>;
export const GasOrderByWithRelationInputObjectZodSchema = makeSchema();
