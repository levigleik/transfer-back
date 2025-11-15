import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const gasscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => GasScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GasScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GasScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GasScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GasScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const GasScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.GasScalarWhereWithAggregatesInput> = gasscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.GasScalarWhereWithAggregatesInput>;
export const GasScalarWhereWithAggregatesInputObjectZodSchema = gasscalarwherewithaggregatesinputSchema;
