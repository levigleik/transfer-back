import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const gasstationscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => GasStationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GasStationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GasStationScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GasStationScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GasStationScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const GasStationScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.GasStationScalarWhereWithAggregatesInput> = gasstationscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.GasStationScalarWhereWithAggregatesInput>;
export const GasStationScalarWhereWithAggregatesInputObjectZodSchema = gasstationscalarwherewithaggregatesinputSchema;
