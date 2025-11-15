import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyWhereUniqueInputObjectSchema as CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema';
import { CompanyCreateWithoutVehiclesInputObjectSchema as CompanyCreateWithoutVehiclesInputObjectSchema } from './CompanyCreateWithoutVehiclesInput.schema';
import { CompanyUncheckedCreateWithoutVehiclesInputObjectSchema as CompanyUncheckedCreateWithoutVehiclesInputObjectSchema } from './CompanyUncheckedCreateWithoutVehiclesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompanyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CompanyCreateWithoutVehiclesInputObjectSchema), z.lazy(() => CompanyUncheckedCreateWithoutVehiclesInputObjectSchema)])
}).strict();
export const CompanyCreateOrConnectWithoutVehiclesInputObjectSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutVehiclesInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyCreateOrConnectWithoutVehiclesInput>;
export const CompanyCreateOrConnectWithoutVehiclesInputObjectZodSchema = makeSchema();
