import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyCreateWithoutVehiclesInputObjectSchema as CompanyCreateWithoutVehiclesInputObjectSchema } from './CompanyCreateWithoutVehiclesInput.schema';
import { CompanyUncheckedCreateWithoutVehiclesInputObjectSchema as CompanyUncheckedCreateWithoutVehiclesInputObjectSchema } from './CompanyUncheckedCreateWithoutVehiclesInput.schema';
import { CompanyCreateOrConnectWithoutVehiclesInputObjectSchema as CompanyCreateOrConnectWithoutVehiclesInputObjectSchema } from './CompanyCreateOrConnectWithoutVehiclesInput.schema';
import { CompanyWhereUniqueInputObjectSchema as CompanyWhereUniqueInputObjectSchema } from './CompanyWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CompanyCreateWithoutVehiclesInputObjectSchema), z.lazy(() => CompanyUncheckedCreateWithoutVehiclesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutVehiclesInputObjectSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputObjectSchema).optional()
}).strict();
export const CompanyCreateNestedOneWithoutVehiclesInputObjectSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutVehiclesInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyCreateNestedOneWithoutVehiclesInput>;
export const CompanyCreateNestedOneWithoutVehiclesInputObjectZodSchema = makeSchema();
