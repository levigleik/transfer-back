import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreateWithoutVehiclesInputObjectSchema as CategoryCreateWithoutVehiclesInputObjectSchema } from './CategoryCreateWithoutVehiclesInput.schema';
import { CategoryUncheckedCreateWithoutVehiclesInputObjectSchema as CategoryUncheckedCreateWithoutVehiclesInputObjectSchema } from './CategoryUncheckedCreateWithoutVehiclesInput.schema';
import { CategoryCreateOrConnectWithoutVehiclesInputObjectSchema as CategoryCreateOrConnectWithoutVehiclesInputObjectSchema } from './CategoryCreateOrConnectWithoutVehiclesInput.schema';
import { CategoryUpsertWithoutVehiclesInputObjectSchema as CategoryUpsertWithoutVehiclesInputObjectSchema } from './CategoryUpsertWithoutVehiclesInput.schema';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateToOneWithWhereWithoutVehiclesInputObjectSchema as CategoryUpdateToOneWithWhereWithoutVehiclesInputObjectSchema } from './CategoryUpdateToOneWithWhereWithoutVehiclesInput.schema';
import { CategoryUpdateWithoutVehiclesInputObjectSchema as CategoryUpdateWithoutVehiclesInputObjectSchema } from './CategoryUpdateWithoutVehiclesInput.schema';
import { CategoryUncheckedUpdateWithoutVehiclesInputObjectSchema as CategoryUncheckedUpdateWithoutVehiclesInputObjectSchema } from './CategoryUncheckedUpdateWithoutVehiclesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoryCreateWithoutVehiclesInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutVehiclesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutVehiclesInputObjectSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutVehiclesInputObjectSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CategoryUpdateToOneWithWhereWithoutVehiclesInputObjectSchema), z.lazy(() => CategoryUpdateWithoutVehiclesInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutVehiclesInputObjectSchema)]).optional()
}).strict();
export const CategoryUpdateOneRequiredWithoutVehiclesNestedInputObjectSchema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutVehiclesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutVehiclesNestedInput>;
export const CategoryUpdateOneRequiredWithoutVehiclesNestedInputObjectZodSchema = makeSchema();
