import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleCreateWithoutCompanyInputObjectSchema as VehicleCreateWithoutCompanyInputObjectSchema } from './VehicleCreateWithoutCompanyInput.schema';
import { VehicleUncheckedCreateWithoutCompanyInputObjectSchema as VehicleUncheckedCreateWithoutCompanyInputObjectSchema } from './VehicleUncheckedCreateWithoutCompanyInput.schema';
import { VehicleCreateOrConnectWithoutCompanyInputObjectSchema as VehicleCreateOrConnectWithoutCompanyInputObjectSchema } from './VehicleCreateOrConnectWithoutCompanyInput.schema';
import { VehicleCreateManyCompanyInputEnvelopeObjectSchema as VehicleCreateManyCompanyInputEnvelopeObjectSchema } from './VehicleCreateManyCompanyInputEnvelope.schema';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './VehicleWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VehicleCreateWithoutCompanyInputObjectSchema), z.lazy(() => VehicleCreateWithoutCompanyInputObjectSchema).array(), z.lazy(() => VehicleUncheckedCreateWithoutCompanyInputObjectSchema), z.lazy(() => VehicleUncheckedCreateWithoutCompanyInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VehicleCreateOrConnectWithoutCompanyInputObjectSchema), z.lazy(() => VehicleCreateOrConnectWithoutCompanyInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VehicleCreateManyCompanyInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => VehicleWhereUniqueInputObjectSchema), z.lazy(() => VehicleWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const VehicleCreateNestedManyWithoutCompanyInputObjectSchema: z.ZodType<Prisma.VehicleCreateNestedManyWithoutCompanyInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleCreateNestedManyWithoutCompanyInput>;
export const VehicleCreateNestedManyWithoutCompanyInputObjectZodSchema = makeSchema();
