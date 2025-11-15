import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const gasstationwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GasStationWhereInputObjectSchema), z.lazy(() => GasStationWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GasStationWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GasStationWhereInputObjectSchema), z.lazy(() => GasStationWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const GasStationWhereInputObjectSchema: z.ZodType<Prisma.GasStationWhereInput> = gasstationwhereinputSchema as unknown as z.ZodType<Prisma.GasStationWhereInput>;
export const GasStationWhereInputObjectZodSchema = gasstationwhereinputSchema;
