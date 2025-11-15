import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleCreateWithoutCategoryInputObjectSchema as VehicleCreateWithoutCategoryInputObjectSchema } from './VehicleCreateWithoutCategoryInput.schema';
import { VehicleUncheckedCreateWithoutCategoryInputObjectSchema as VehicleUncheckedCreateWithoutCategoryInputObjectSchema } from './VehicleUncheckedCreateWithoutCategoryInput.schema';
import { VehicleCreateOrConnectWithoutCategoryInputObjectSchema as VehicleCreateOrConnectWithoutCategoryInputObjectSchema } from './VehicleCreateOrConnectWithoutCategoryInput.schema';
import { VehicleUpsertWithWhereUniqueWithoutCategoryInputObjectSchema as VehicleUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './VehicleUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { VehicleCreateManyCategoryInputEnvelopeObjectSchema as VehicleCreateManyCategoryInputEnvelopeObjectSchema } from './VehicleCreateManyCategoryInputEnvelope.schema';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './VehicleWhereUniqueInput.schema';
import { VehicleUpdateWithWhereUniqueWithoutCategoryInputObjectSchema as VehicleUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './VehicleUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { VehicleUpdateManyWithWhereWithoutCategoryInputObjectSchema as VehicleUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './VehicleUpdateManyWithWhereWithoutCategoryInput.schema';
import { VehicleScalarWhereInputObjectSchema as VehicleScalarWhereInputObjectSchema } from './VehicleScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VehicleCreateWithoutCategoryInputObjectSchema), z.lazy(() => VehicleCreateWithoutCategoryInputObjectSchema).array(), z.lazy(() => VehicleUncheckedCreateWithoutCategoryInputObjectSchema), z.lazy(() => VehicleUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VehicleCreateOrConnectWithoutCategoryInputObjectSchema), z.lazy(() => VehicleCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => VehicleUpsertWithWhereUniqueWithoutCategoryInputObjectSchema), z.lazy(() => VehicleUpsertWithWhereUniqueWithoutCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VehicleCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => VehicleUpdateWithWhereUniqueWithoutCategoryInputObjectSchema), z.lazy(() => VehicleUpdateWithWhereUniqueWithoutCategoryInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => VehicleUpdateManyWithWhereWithoutCategoryInputObjectSchema), z.lazy(() => VehicleUpdateManyWithWhereWithoutCategoryInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => VehicleScalarWhereInputObjectSchema), z.lazy(() => VehicleScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const VehicleUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema: z.ZodType<Prisma.VehicleUncheckedUpdateManyWithoutCategoryNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleUncheckedUpdateManyWithoutCategoryNestedInput>;
export const VehicleUncheckedUpdateManyWithoutCategoryNestedInputObjectZodSchema = makeSchema();
