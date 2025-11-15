import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { VehicleListRelationFilterObjectSchema as VehicleListRelationFilterObjectSchema } from './VehicleListRelationFilter.schema'

const brandwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => BrandWhereInputObjectSchema), z.lazy(() => BrandWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => BrandWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => BrandWhereInputObjectSchema), z.lazy(() => BrandWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  vehicles: z.lazy(() => VehicleListRelationFilterObjectSchema).optional()
}).strict();
export const BrandWhereInputObjectSchema: z.ZodType<Prisma.BrandWhereInput> = brandwhereinputSchema as unknown as z.ZodType<Prisma.BrandWhereInput>;
export const BrandWhereInputObjectZodSchema = brandwhereinputSchema;
