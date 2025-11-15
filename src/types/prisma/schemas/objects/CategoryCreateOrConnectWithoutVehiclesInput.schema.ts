import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryCreateWithoutVehiclesInputObjectSchema as CategoryCreateWithoutVehiclesInputObjectSchema } from './CategoryCreateWithoutVehiclesInput.schema';
import { CategoryUncheckedCreateWithoutVehiclesInputObjectSchema as CategoryUncheckedCreateWithoutVehiclesInputObjectSchema } from './CategoryUncheckedCreateWithoutVehiclesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CategoryCreateWithoutVehiclesInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutVehiclesInputObjectSchema)])
}).strict();
export const CategoryCreateOrConnectWithoutVehiclesInputObjectSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutVehiclesInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateOrConnectWithoutVehiclesInput>;
export const CategoryCreateOrConnectWithoutVehiclesInputObjectZodSchema = makeSchema();
