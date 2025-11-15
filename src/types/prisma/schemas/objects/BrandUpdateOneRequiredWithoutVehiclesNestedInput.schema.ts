import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { BrandCreateWithoutVehiclesInputObjectSchema as BrandCreateWithoutVehiclesInputObjectSchema } from './BrandCreateWithoutVehiclesInput.schema';
import { BrandUncheckedCreateWithoutVehiclesInputObjectSchema as BrandUncheckedCreateWithoutVehiclesInputObjectSchema } from './BrandUncheckedCreateWithoutVehiclesInput.schema';
import { BrandCreateOrConnectWithoutVehiclesInputObjectSchema as BrandCreateOrConnectWithoutVehiclesInputObjectSchema } from './BrandCreateOrConnectWithoutVehiclesInput.schema';
import { BrandUpsertWithoutVehiclesInputObjectSchema as BrandUpsertWithoutVehiclesInputObjectSchema } from './BrandUpsertWithoutVehiclesInput.schema';
import { BrandWhereUniqueInputObjectSchema as BrandWhereUniqueInputObjectSchema } from './BrandWhereUniqueInput.schema';
import { BrandUpdateToOneWithWhereWithoutVehiclesInputObjectSchema as BrandUpdateToOneWithWhereWithoutVehiclesInputObjectSchema } from './BrandUpdateToOneWithWhereWithoutVehiclesInput.schema';
import { BrandUpdateWithoutVehiclesInputObjectSchema as BrandUpdateWithoutVehiclesInputObjectSchema } from './BrandUpdateWithoutVehiclesInput.schema';
import { BrandUncheckedUpdateWithoutVehiclesInputObjectSchema as BrandUncheckedUpdateWithoutVehiclesInputObjectSchema } from './BrandUncheckedUpdateWithoutVehiclesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => BrandCreateWithoutVehiclesInputObjectSchema), z.lazy(() => BrandUncheckedCreateWithoutVehiclesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => BrandCreateOrConnectWithoutVehiclesInputObjectSchema).optional(),
  upsert: z.lazy(() => BrandUpsertWithoutVehiclesInputObjectSchema).optional(),
  connect: z.lazy(() => BrandWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => BrandUpdateToOneWithWhereWithoutVehiclesInputObjectSchema), z.lazy(() => BrandUpdateWithoutVehiclesInputObjectSchema), z.lazy(() => BrandUncheckedUpdateWithoutVehiclesInputObjectSchema)]).optional()
}).strict();
export const BrandUpdateOneRequiredWithoutVehiclesNestedInputObjectSchema: z.ZodType<Prisma.BrandUpdateOneRequiredWithoutVehiclesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.BrandUpdateOneRequiredWithoutVehiclesNestedInput>;
export const BrandUpdateOneRequiredWithoutVehiclesNestedInputObjectZodSchema = makeSchema();
