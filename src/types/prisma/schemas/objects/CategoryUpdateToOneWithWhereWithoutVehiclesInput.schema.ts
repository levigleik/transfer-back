import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { CategoryUpdateWithoutVehiclesInputObjectSchema as CategoryUpdateWithoutVehiclesInputObjectSchema } from './CategoryUpdateWithoutVehiclesInput.schema';
import { CategoryUncheckedUpdateWithoutVehiclesInputObjectSchema as CategoryUncheckedUpdateWithoutVehiclesInputObjectSchema } from './CategoryUncheckedUpdateWithoutVehiclesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CategoryUpdateWithoutVehiclesInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutVehiclesInputObjectSchema)])
}).strict();
export const CategoryUpdateToOneWithWhereWithoutVehiclesInputObjectSchema: z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutVehiclesInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutVehiclesInput>;
export const CategoryUpdateToOneWithWhereWithoutVehiclesInputObjectZodSchema = makeSchema();
