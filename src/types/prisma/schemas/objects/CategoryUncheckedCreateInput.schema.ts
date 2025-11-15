import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleUncheckedCreateNestedManyWithoutCategoryInputObjectSchema as VehicleUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './VehicleUncheckedCreateNestedManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  vehicles: z.lazy(() => VehicleUncheckedCreateNestedManyWithoutCategoryInputObjectSchema)
}).strict();
export const CategoryUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUncheckedCreateInput>;
export const CategoryUncheckedCreateInputObjectZodSchema = makeSchema();
