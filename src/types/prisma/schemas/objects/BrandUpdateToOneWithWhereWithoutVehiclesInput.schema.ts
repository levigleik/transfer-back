import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BrandWhereInputObjectSchema as BrandWhereInputObjectSchema } from './BrandWhereInput.schema';
import { BrandUpdateWithoutVehiclesInputObjectSchema as BrandUpdateWithoutVehiclesInputObjectSchema } from './BrandUpdateWithoutVehiclesInput.schema';
import { BrandUncheckedUpdateWithoutVehiclesInputObjectSchema as BrandUncheckedUpdateWithoutVehiclesInputObjectSchema } from './BrandUncheckedUpdateWithoutVehiclesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BrandWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => BrandUpdateWithoutVehiclesInputObjectSchema), z.lazy(() => BrandUncheckedUpdateWithoutVehiclesInputObjectSchema)])
}).strict();
export const BrandUpdateToOneWithWhereWithoutVehiclesInputObjectSchema: z.ZodType<Prisma.BrandUpdateToOneWithWhereWithoutVehiclesInput> = makeSchema() as unknown as z.ZodType<Prisma.BrandUpdateToOneWithWhereWithoutVehiclesInput>;
export const BrandUpdateToOneWithWhereWithoutVehiclesInputObjectZodSchema = makeSchema();
