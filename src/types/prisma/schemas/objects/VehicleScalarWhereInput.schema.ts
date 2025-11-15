import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumPlateTypeFilterObjectSchema as EnumPlateTypeFilterObjectSchema } from './EnumPlateTypeFilter.schema';
import { PlateTypeSchema } from '../enums/PlateType.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const vehiclescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => VehicleScalarWhereInputObjectSchema), z.lazy(() => VehicleScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VehicleScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VehicleScalarWhereInputObjectSchema), z.lazy(() => VehicleScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  identifier: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  model: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  year: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  capacity: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  doors: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  uf: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  plateType: z.union([z.lazy(() => EnumPlateTypeFilterObjectSchema), PlateTypeSchema]).optional(),
  plate: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  renavam: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  chassis: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  review: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  photos: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  gasId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  brandId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  categoryId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  companyId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const VehicleScalarWhereInputObjectSchema: z.ZodType<Prisma.VehicleScalarWhereInput> = vehiclescalarwhereinputSchema as unknown as z.ZodType<Prisma.VehicleScalarWhereInput>;
export const VehicleScalarWhereInputObjectZodSchema = vehiclescalarwhereinputSchema;
