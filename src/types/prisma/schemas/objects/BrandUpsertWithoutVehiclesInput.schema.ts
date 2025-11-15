import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BrandUpdateWithoutVehiclesInputObjectSchema as BrandUpdateWithoutVehiclesInputObjectSchema } from './BrandUpdateWithoutVehiclesInput.schema';
import { BrandUncheckedUpdateWithoutVehiclesInputObjectSchema as BrandUncheckedUpdateWithoutVehiclesInputObjectSchema } from './BrandUncheckedUpdateWithoutVehiclesInput.schema';
import { BrandCreateWithoutVehiclesInputObjectSchema as BrandCreateWithoutVehiclesInputObjectSchema } from './BrandCreateWithoutVehiclesInput.schema';
import { BrandUncheckedCreateWithoutVehiclesInputObjectSchema as BrandUncheckedCreateWithoutVehiclesInputObjectSchema } from './BrandUncheckedCreateWithoutVehiclesInput.schema';
import { BrandWhereInputObjectSchema as BrandWhereInputObjectSchema } from './BrandWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => BrandUpdateWithoutVehiclesInputObjectSchema), z.lazy(() => BrandUncheckedUpdateWithoutVehiclesInputObjectSchema)]),
  create: z.union([z.lazy(() => BrandCreateWithoutVehiclesInputObjectSchema), z.lazy(() => BrandUncheckedCreateWithoutVehiclesInputObjectSchema)]),
  where: z.lazy(() => BrandWhereInputObjectSchema).optional()
}).strict();
export const BrandUpsertWithoutVehiclesInputObjectSchema: z.ZodType<Prisma.BrandUpsertWithoutVehiclesInput> = makeSchema() as unknown as z.ZodType<Prisma.BrandUpsertWithoutVehiclesInput>;
export const BrandUpsertWithoutVehiclesInputObjectZodSchema = makeSchema();
