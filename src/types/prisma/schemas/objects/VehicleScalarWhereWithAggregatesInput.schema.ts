import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumPlateTypeWithAggregatesFilterObjectSchema as EnumPlateTypeWithAggregatesFilterObjectSchema } from './EnumPlateTypeWithAggregatesFilter.schema';
import { PlateTypeSchema } from '../enums/PlateType.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const vehiclescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => VehicleScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VehicleScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VehicleScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VehicleScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VehicleScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  identifier: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  model: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  year: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  capacity: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  doors: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  uf: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  plateType: z.union([z.lazy(() => EnumPlateTypeWithAggregatesFilterObjectSchema), PlateTypeSchema]).optional(),
  plate: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  renavam: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  chassis: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  review: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  photos: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  gasId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  brandId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  categoryId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  companyId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const VehicleScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.VehicleScalarWhereWithAggregatesInput> = vehiclescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.VehicleScalarWhereWithAggregatesInput>;
export const VehicleScalarWhereWithAggregatesInputObjectZodSchema = vehiclescalarwherewithaggregatesinputSchema;
