import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PlateTypeSchema } from '../enums/PlateType.schema';
import { NestedEnumPlateTypeFilterObjectSchema as NestedEnumPlateTypeFilterObjectSchema } from './NestedEnumPlateTypeFilter.schema'

const makeSchema = () => z.object({
  equals: PlateTypeSchema.optional(),
  in: PlateTypeSchema.array().optional(),
  notIn: PlateTypeSchema.array().optional(),
  not: z.union([PlateTypeSchema, z.lazy(() => NestedEnumPlateTypeFilterObjectSchema)]).optional()
}).strict();
export const EnumPlateTypeFilterObjectSchema: z.ZodType<Prisma.EnumPlateTypeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumPlateTypeFilter>;
export const EnumPlateTypeFilterObjectZodSchema = makeSchema();
