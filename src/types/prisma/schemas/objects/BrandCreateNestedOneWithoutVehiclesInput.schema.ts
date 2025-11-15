import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BrandCreateWithoutVehiclesInputObjectSchema as BrandCreateWithoutVehiclesInputObjectSchema } from './BrandCreateWithoutVehiclesInput.schema';
import { BrandUncheckedCreateWithoutVehiclesInputObjectSchema as BrandUncheckedCreateWithoutVehiclesInputObjectSchema } from './BrandUncheckedCreateWithoutVehiclesInput.schema';
import { BrandCreateOrConnectWithoutVehiclesInputObjectSchema as BrandCreateOrConnectWithoutVehiclesInputObjectSchema } from './BrandCreateOrConnectWithoutVehiclesInput.schema';
import { BrandWhereUniqueInputObjectSchema as BrandWhereUniqueInputObjectSchema } from './BrandWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BrandCreateWithoutVehiclesInputObjectSchema), z.lazy(() => BrandUncheckedCreateWithoutVehiclesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BrandCreateOrConnectWithoutVehiclesInputObjectSchema).optional(),
  connect: z.lazy(() => BrandWhereUniqueInputObjectSchema).optional()
}).strict();
export const BrandCreateNestedOneWithoutVehiclesInputObjectSchema: z.ZodType<Prisma.BrandCreateNestedOneWithoutVehiclesInput> = makeSchema() as unknown as z.ZodType<Prisma.BrandCreateNestedOneWithoutVehiclesInput>;
export const BrandCreateNestedOneWithoutVehiclesInputObjectZodSchema = makeSchema();
