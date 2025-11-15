import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { VehicleListRelationFilterObjectSchema as VehicleListRelationFilterObjectSchema } from './VehicleListRelationFilter.schema'

const companywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CompanyWhereInputObjectSchema), z.lazy(() => CompanyWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CompanyWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CompanyWhereInputObjectSchema), z.lazy(() => CompanyWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  cnpj: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  vehicles: z.lazy(() => VehicleListRelationFilterObjectSchema).optional()
}).strict();
export const CompanyWhereInputObjectSchema: z.ZodType<Prisma.CompanyWhereInput> = companywhereinputSchema as unknown as z.ZodType<Prisma.CompanyWhereInput>;
export const CompanyWhereInputObjectZodSchema = companywhereinputSchema;
