import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleCreateWithoutCategoryInputObjectSchema as VehicleCreateWithoutCategoryInputObjectSchema } from './VehicleCreateWithoutCategoryInput.schema';
import { VehicleUncheckedCreateWithoutCategoryInputObjectSchema as VehicleUncheckedCreateWithoutCategoryInputObjectSchema } from './VehicleUncheckedCreateWithoutCategoryInput.schema';
import { VehicleCreateOrConnectWithoutCategoryInputObjectSchema as VehicleCreateOrConnectWithoutCategoryInputObjectSchema } from './VehicleCreateOrConnectWithoutCategoryInput.schema';
import { VehicleCreateManyCategoryInputEnvelopeObjectSchema as VehicleCreateManyCategoryInputEnvelopeObjectSchema } from './VehicleCreateManyCategoryInputEnvelope.schema';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './VehicleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VehicleCreateWithoutCategoryInputObjectSchema), z.lazy(() => VehicleCreateWithoutCategoryInputObjectSchema).array(), z.lazy(() => VehicleUncheckedCreateWithoutCategoryInputObjectSchema), z.lazy(() => VehicleUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VehicleCreateOrConnectWithoutCategoryInputObjectSchema), z.lazy(() => VehicleCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VehicleCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const VehicleCreateNestedManyWithoutCategoryInputObjectSchema: z.ZodType<Prisma.VehicleCreateNestedManyWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleCreateNestedManyWithoutCategoryInput>;
export const VehicleCreateNestedManyWithoutCategoryInputObjectZodSchema = makeSchema();
