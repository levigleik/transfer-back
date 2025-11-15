import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreateWithoutVehiclesInputObjectSchema as CategoryCreateWithoutVehiclesInputObjectSchema } from './CategoryCreateWithoutVehiclesInput.schema';
import { CategoryUncheckedCreateWithoutVehiclesInputObjectSchema as CategoryUncheckedCreateWithoutVehiclesInputObjectSchema } from './CategoryUncheckedCreateWithoutVehiclesInput.schema';
import { CategoryCreateOrConnectWithoutVehiclesInputObjectSchema as CategoryCreateOrConnectWithoutVehiclesInputObjectSchema } from './CategoryCreateOrConnectWithoutVehiclesInput.schema';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoryCreateWithoutVehiclesInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutVehiclesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutVehiclesInputObjectSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional()
}).strict();
export const CategoryCreateNestedOneWithoutVehiclesInputObjectSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutVehiclesInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateNestedOneWithoutVehiclesInput>;
export const CategoryCreateNestedOneWithoutVehiclesInputObjectZodSchema = makeSchema();
