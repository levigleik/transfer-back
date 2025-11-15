import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyCreateWithoutVehiclesInputObjectSchema as CompanyCreateWithoutVehiclesInputObjectSchema } from './CompanyCreateWithoutVehiclesInput.schema';
import { CompanyUncheckedCreateWithoutVehiclesInputObjectSchema as CompanyUncheckedCreateWithoutVehiclesInputObjectSchema } from './CompanyUncheckedCreateWithoutVehiclesInput.schema';
import { CompanyCreateOrConnectWithoutVehiclesInputObjectSchema as CompanyCreateOrConnectWithoutVehiclesInputObjectSchema } from './CompanyCreateOrConnectWithoutVehiclesInput.schema';
import { CompanyUpsertWithoutVehiclesInputObjectSchema as CompanyUpsertWithoutVehiclesInputObjectSchema } from './CompanyUpsertWithoutVehiclesInput.schema';
import { CompanyWhereUniqueInputObjectSchema as CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';
import { CompanyUpdateToOneWithWhereWithoutVehiclesInputObjectSchema as CompanyUpdateToOneWithWhereWithoutVehiclesInputObjectSchema } from './CompanyUpdateToOneWithWhereWithoutVehiclesInput.schema';
import { CompanyUpdateWithoutVehiclesInputObjectSchema as CompanyUpdateWithoutVehiclesInputObjectSchema } from './CompanyUpdateWithoutVehiclesInput.schema';
import { CompanyUncheckedUpdateWithoutVehiclesInputObjectSchema as CompanyUncheckedUpdateWithoutVehiclesInputObjectSchema } from './CompanyUncheckedUpdateWithoutVehiclesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompanyCreateWithoutVehiclesInputObjectSchema), z.lazy(() => CompanyUncheckedCreateWithoutVehiclesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutVehiclesInputObjectSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutVehiclesInputObjectSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CompanyUpdateToOneWithWhereWithoutVehiclesInputObjectSchema), z.lazy(() => CompanyUpdateWithoutVehiclesInputObjectSchema), z.lazy(() => CompanyUncheckedUpdateWithoutVehiclesInputObjectSchema)]).optional()
}).strict();
export const CompanyUpdateOneRequiredWithoutVehiclesNestedInputObjectSchema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutVehiclesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutVehiclesNestedInput>;
export const CompanyUpdateOneRequiredWithoutVehiclesNestedInputObjectZodSchema = makeSchema();
