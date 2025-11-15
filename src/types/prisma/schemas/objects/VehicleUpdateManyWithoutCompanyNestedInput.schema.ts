import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleCreateWithoutCompanyInputObjectSchema as VehicleCreateWithoutCompanyInputObjectSchema } from './VehicleCreateWithoutCompanyInput.schema';
import { VehicleUncheckedCreateWithoutCompanyInputObjectSchema as VehicleUncheckedCreateWithoutCompanyInputObjectSchema } from './VehicleUncheckedCreateWithoutCompanyInput.schema';
import { VehicleCreateOrConnectWithoutCompanyInputObjectSchema as VehicleCreateOrConnectWithoutCompanyInputObjectSchema } from './VehicleCreateOrConnectWithoutCompanyInput.schema';
import { VehicleUpsertWithWhereUniqueWithoutCompanyInputObjectSchema as VehicleUpsertWithWhereUniqueWithoutCompanyInputObjectSchema } from './VehicleUpsertWithWhereUniqueWithoutCompanyInput.schema';
import { VehicleCreateManyCompanyInputEnvelopeObjectSchema as VehicleCreateManyCompanyInputEnvelopeObjectSchema } from './VehicleCreateManyCompanyInputEnvelope.schema';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './VehicleWhereUniqueInput.schema';
import { VehicleUpdateWithWhereUniqueWithoutCompanyInputObjectSchema as VehicleUpdateWithWhereUniqueWithoutCompanyInputObjectSchema } from './VehicleUpdateWithWhereUniqueWithoutCompanyInput.schema';
import { VehicleUpdateManyWithWhereWithoutCompanyInputObjectSchema as VehicleUpdateManyWithWhereWithoutCompanyInputObjectSchema } from './VehicleUpdateManyWithWhereWithoutCompanyInput.schema';
import { VehicleScalarWhereInputObjectSchema as VehicleScalarWhereInputObjectSchema } from './VehicleScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VehicleCreateWithoutCompanyInputObjectSchema), z.lazy(() => VehicleCreateWithoutCompanyInputObjectSchema).array(), z.lazy(() => VehicleUncheckedCreateWithoutCompanyInputObjectSchema), z.lazy(() => VehicleUncheckedCreateWithoutCompanyInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VehicleCreateOrConnectWithoutCompanyInputObjectSchema), z.lazy(() => VehicleCreateOrConnectWithoutCompanyInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => VehicleUpsertWithWhereUniqueWithoutCompanyInputObjectSchema), z.lazy(() => VehicleUpsertWithWhereUniqueWithoutCompanyInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VehicleCreateManyCompanyInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => VehicleUpdateWithWhereUniqueWithoutCompanyInputObjectSchema), z.lazy(() => VehicleUpdateWithWhereUniqueWithoutCompanyInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => VehicleUpdateManyWithWhereWithoutCompanyInputObjectSchema), z.lazy(() => VehicleUpdateManyWithWhereWithoutCompanyInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => VehicleScalarWhereInputObjectSchema), z.lazy(() => VehicleScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const VehicleUpdateManyWithoutCompanyNestedInputObjectSchema: z.ZodType<Prisma.VehicleUpdateManyWithoutCompanyNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleUpdateManyWithoutCompanyNestedInput>;
export const VehicleUpdateManyWithoutCompanyNestedInputObjectZodSchema = makeSchema();
