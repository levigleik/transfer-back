import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasSupplyWhereInputObjectSchema as GasSupplyWhereInputObjectSchema } from './GasSupplyWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => GasSupplyWhereInputObjectSchema).optional(),
  some: z.lazy(() => GasSupplyWhereInputObjectSchema).optional(),
  none: z.lazy(() => GasSupplyWhereInputObjectSchema).optional()
}).strict();
export const GasSupplyListRelationFilterObjectSchema: z.ZodType<Prisma.GasSupplyListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyListRelationFilter>;
export const GasSupplyListRelationFilterObjectZodSchema = makeSchema();
