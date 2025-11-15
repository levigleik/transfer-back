import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleCreateNestedManyWithoutCategoryInputObjectSchema as VehicleCreateNestedManyWithoutCategoryInputObjectSchema } from './VehicleCreateNestedManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  vehicles: z.lazy(() => VehicleCreateNestedManyWithoutCategoryInputObjectSchema)
}).strict();
export const CategoryCreateInputObjectSchema: z.ZodType<Prisma.CategoryCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateInput>;
export const CategoryCreateInputObjectZodSchema = makeSchema();
