import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatFilterObjectSchema as FloatFilterObjectSchema } from './FloatFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { GasScalarRelationFilterObjectSchema as GasScalarRelationFilterObjectSchema } from './GasScalarRelationFilter.schema';
import { GasWhereInputObjectSchema as GasWhereInputObjectSchema } from './GasWhereInput.schema'

const gassupplywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => GasSupplyWhereInputObjectSchema), z.lazy(() => GasSupplyWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GasSupplyWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GasSupplyWhereInputObjectSchema), z.lazy(() => GasSupplyWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  kmToReview: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  kmToStop: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  quantity: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  supplyAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  totalPrice: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
  gasId: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  gas: z.union([z.lazy(() => GasScalarRelationFilterObjectSchema), z.lazy(() => GasWhereInputObjectSchema)]).optional()
}).strict();
export const GasSupplyWhereInputObjectSchema: z.ZodType<Prisma.GasSupplyWhereInput> = gassupplywhereinputSchema as unknown as z.ZodType<Prisma.GasSupplyWhereInput>;
export const GasSupplyWhereInputObjectZodSchema = gassupplywhereinputSchema;
