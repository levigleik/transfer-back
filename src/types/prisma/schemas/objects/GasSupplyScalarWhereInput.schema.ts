import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const gassupplyscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GasSupplyScalarWhereInputObjectSchema), z.lazy(() => GasSupplyScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GasSupplyScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GasSupplyScalarWhereInputObjectSchema), z.lazy(() => GasSupplyScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  kmToReview: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  kmToStop: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  quantity: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  supplyAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  totalPrice: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  gasId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const GasSupplyScalarWhereInputObjectSchema: z.ZodType<Prisma.GasSupplyScalarWhereInput> = gassupplyscalarwhereinputSchema as unknown as z.ZodType<Prisma.GasSupplyScalarWhereInput>;
export const GasSupplyScalarWhereInputObjectZodSchema = gassupplyscalarwhereinputSchema;
