import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PlateTypeSchema } from '../enums/PlateType.schema'

const nestedenumplatetypefilterSchema = z.object({
  equals: PlateTypeSchema.optional(),
  in: PlateTypeSchema.array().optional(),
  notIn: PlateTypeSchema.array().optional(),
  not: z.union([PlateTypeSchema, z.lazy(() => NestedEnumPlateTypeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumPlateTypeFilterObjectSchema: z.ZodType<Prisma.NestedEnumPlateTypeFilter> = nestedenumplatetypefilterSchema as unknown as z.ZodType<Prisma.NestedEnumPlateTypeFilter>;
export const NestedEnumPlateTypeFilterObjectZodSchema = nestedenumplatetypefilterSchema;
