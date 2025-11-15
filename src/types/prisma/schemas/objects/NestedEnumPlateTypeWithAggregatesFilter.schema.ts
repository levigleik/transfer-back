import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PlateTypeSchema } from '../enums/PlateType.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumPlateTypeFilterObjectSchema as NestedEnumPlateTypeFilterObjectSchema } from './NestedEnumPlateTypeFilter.schema'

const nestedenumplatetypewithaggregatesfilterSchema = z.object({
  equals: PlateTypeSchema.optional(),
  in: PlateTypeSchema.array().optional(),
  notIn: PlateTypeSchema.array().optional(),
  not: z.union([PlateTypeSchema, z.lazy(() => NestedEnumPlateTypeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumPlateTypeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumPlateTypeFilterObjectSchema).optional()
}).strict();
export const NestedEnumPlateTypeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumPlateTypeWithAggregatesFilter> = nestedenumplatetypewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumPlateTypeWithAggregatesFilter>;
export const NestedEnumPlateTypeWithAggregatesFilterObjectZodSchema = nestedenumplatetypewithaggregatesfilterSchema;
