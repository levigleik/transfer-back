import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleWhereInputObjectSchema as VehicleWhereInputObjectSchema } from './VehicleWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => VehicleWhereInputObjectSchema).optional(),
  some: z.lazy(() => VehicleWhereInputObjectSchema).optional(),
  none: z.lazy(() => VehicleWhereInputObjectSchema).optional()
}).strict();
export const VehicleListRelationFilterObjectSchema: z.ZodType<Prisma.VehicleListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.VehicleListRelationFilter>;
export const VehicleListRelationFilterObjectZodSchema = makeSchema();
