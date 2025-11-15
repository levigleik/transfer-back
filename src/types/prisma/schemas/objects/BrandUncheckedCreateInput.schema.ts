import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleUncheckedCreateNestedManyWithoutBrandInputObjectSchema as VehicleUncheckedCreateNestedManyWithoutBrandInputObjectSchema } from './VehicleUncheckedCreateNestedManyWithoutBrandInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  vehicles: z.lazy(() => VehicleUncheckedCreateNestedManyWithoutBrandInputObjectSchema)
}).strict();
export const BrandUncheckedCreateInputObjectSchema: z.ZodType<Prisma.BrandUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BrandUncheckedCreateInput>;
export const BrandUncheckedCreateInputObjectZodSchema = makeSchema();
