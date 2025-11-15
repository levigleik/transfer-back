import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VehicleOrderByRelationAggregateInputObjectSchema as VehicleOrderByRelationAggregateInputObjectSchema } from './VehicleOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  vehicles: z.lazy(() => VehicleOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const BrandOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.BrandOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.BrandOrderByWithRelationInput>;
export const BrandOrderByWithRelationInputObjectZodSchema = makeSchema();
