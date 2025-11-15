import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { VehicleListRelationFilterObjectSchema as VehicleListRelationFilterObjectSchema } from './VehicleListRelationFilter.schema';
import { GasSupplyListRelationFilterObjectSchema as GasSupplyListRelationFilterObjectSchema } from './GasSupplyListRelationFilter.schema'

const gaswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GasWhereInputObjectSchema), z.lazy(() => GasWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GasWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GasWhereInputObjectSchema), z.lazy(() => GasWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  vehicle: z.lazy(() => VehicleListRelationFilterObjectSchema).optional(),
  gasSupplies: z.lazy(() => GasSupplyListRelationFilterObjectSchema).optional()
}).strict();
export const GasWhereInputObjectSchema: z.ZodType<Prisma.GasWhereInput> = gaswhereinputSchema as unknown as z.ZodType<Prisma.GasWhereInput>;
export const GasWhereInputObjectZodSchema = gaswhereinputSchema;
