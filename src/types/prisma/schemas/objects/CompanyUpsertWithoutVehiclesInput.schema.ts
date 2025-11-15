import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyUpdateWithoutVehiclesInputObjectSchema as CompanyUpdateWithoutVehiclesInputObjectSchema } from './CompanyUpdateWithoutVehiclesInput.schema';
import { CompanyUncheckedUpdateWithoutVehiclesInputObjectSchema as CompanyUncheckedUpdateWithoutVehiclesInputObjectSchema } from './CompanyUncheckedUpdateWithoutVehiclesInput.schema';
import { CompanyCreateWithoutVehiclesInputObjectSchema as CompanyCreateWithoutVehiclesInputObjectSchema } from './CompanyCreateWithoutVehiclesInput.schema';
import { CompanyUncheckedCreateWithoutVehiclesInputObjectSchema as CompanyUncheckedCreateWithoutVehiclesInputObjectSchema } from './CompanyUncheckedCreateWithoutVehiclesInput.schema';
import { CompanyWhereInputObjectSchema as CompanyWhereInputObjectSchema } from './CompanyWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CompanyUpdateWithoutVehiclesInputObjectSchema), z.lazy(() => CompanyUncheckedUpdateWithoutVehiclesInputObjectSchema)]),
  create: z.union([z.lazy(() => CompanyCreateWithoutVehiclesInputObjectSchema), z.lazy(() => CompanyUncheckedCreateWithoutVehiclesInputObjectSchema)]),
  where: z.lazy(() => CompanyWhereInputObjectSchema).optional()
}).strict();
export const CompanyUpsertWithoutVehiclesInputObjectSchema: z.ZodType<Prisma.CompanyUpsertWithoutVehiclesInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUpsertWithoutVehiclesInput>;
export const CompanyUpsertWithoutVehiclesInputObjectZodSchema = makeSchema();
