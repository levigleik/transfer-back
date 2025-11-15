import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BrandWhereUniqueInputObjectSchema as BrandWhereUniqueInputObjectSchema } from './BrandWhereUniqueInput.schema';
import { BrandCreateWithoutVehiclesInputObjectSchema as BrandCreateWithoutVehiclesInputObjectSchema } from './BrandCreateWithoutVehiclesInput.schema';
import { BrandUncheckedCreateWithoutVehiclesInputObjectSchema as BrandUncheckedCreateWithoutVehiclesInputObjectSchema } from './BrandUncheckedCreateWithoutVehiclesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => BrandWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => BrandCreateWithoutVehiclesInputObjectSchema), z.lazy(() => BrandUncheckedCreateWithoutVehiclesInputObjectSchema)])
}).strict();
export const BrandCreateOrConnectWithoutVehiclesInputObjectSchema: z.ZodType<Prisma.BrandCreateOrConnectWithoutVehiclesInput> = makeSchema() as unknown as z.ZodType<Prisma.BrandCreateOrConnectWithoutVehiclesInput>;
export const BrandCreateOrConnectWithoutVehiclesInputObjectZodSchema = makeSchema();
