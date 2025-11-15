import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleCreateNestedManyWithoutBrandInputObjectSchema as VehicleCreateNestedManyWithoutBrandInputObjectSchema } from './VehicleCreateNestedManyWithoutBrandInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  vehicles: z.lazy(() => VehicleCreateNestedManyWithoutBrandInputObjectSchema)
}).strict();
export const BrandCreateInputObjectSchema: z.ZodType<Prisma.BrandCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BrandCreateInput>;
export const BrandCreateInputObjectZodSchema = makeSchema();
