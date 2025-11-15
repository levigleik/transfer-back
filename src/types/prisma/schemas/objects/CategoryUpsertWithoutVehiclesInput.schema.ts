import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryUpdateWithoutVehiclesInputObjectSchema as CategoryUpdateWithoutVehiclesInputObjectSchema } from './CategoryUpdateWithoutVehiclesInput.schema';
import { CategoryUncheckedUpdateWithoutVehiclesInputObjectSchema as CategoryUncheckedUpdateWithoutVehiclesInputObjectSchema } from './CategoryUncheckedUpdateWithoutVehiclesInput.schema';
import { CategoryCreateWithoutVehiclesInputObjectSchema as CategoryCreateWithoutVehiclesInputObjectSchema } from './CategoryCreateWithoutVehiclesInput.schema';
import { CategoryUncheckedCreateWithoutVehiclesInputObjectSchema as CategoryUncheckedCreateWithoutVehiclesInputObjectSchema } from './CategoryUncheckedCreateWithoutVehiclesInput.schema';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CategoryUpdateWithoutVehiclesInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutVehiclesInputObjectSchema)]),
  create: z.union([z.lazy(() => CategoryCreateWithoutVehiclesInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutVehiclesInputObjectSchema)]),
  where: z.lazy(() => CategoryWhereInputObjectSchema).optional()
}).strict();
export const CategoryUpsertWithoutVehiclesInputObjectSchema: z.ZodType<Prisma.CategoryUpsertWithoutVehiclesInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpsertWithoutVehiclesInput>;
export const CategoryUpsertWithoutVehiclesInputObjectZodSchema = makeSchema();
