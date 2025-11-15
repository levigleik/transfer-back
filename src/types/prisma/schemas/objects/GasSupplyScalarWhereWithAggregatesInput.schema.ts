import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { FloatWithAggregatesFilterObjectSchema as FloatWithAggregatesFilterObjectSchema } from './FloatWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const gassupplyscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => GasSupplyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GasSupplyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GasSupplyScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GasSupplyScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GasSupplyScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  kmToReview: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  kmToStop: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  quantity: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  supplyAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  totalPrice: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
  gasId: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const GasSupplyScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.GasSupplyScalarWhereWithAggregatesInput> = gassupplyscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.GasSupplyScalarWhereWithAggregatesInput>;
export const GasSupplyScalarWhereWithAggregatesInputObjectZodSchema = gassupplyscalarwherewithaggregatesinputSchema;
