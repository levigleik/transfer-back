import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CompanyWhereInputObjectSchema as CompanyWhereInputObjectSchema } from './CompanyWhereInput.schema';
import { CompanyUpdateWithoutVehiclesInputObjectSchema as CompanyUpdateWithoutVehiclesInputObjectSchema } from './CompanyUpdateWithoutVehiclesInput.schema';
import { CompanyUncheckedUpdateWithoutVehiclesInputObjectSchema as CompanyUncheckedUpdateWithoutVehiclesInputObjectSchema } from './CompanyUncheckedUpdateWithoutVehiclesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CompanyWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CompanyUpdateWithoutVehiclesInputObjectSchema), z.lazy(() => CompanyUncheckedUpdateWithoutVehiclesInputObjectSchema)])
}).strict();
export const CompanyUpdateToOneWithWhereWithoutVehiclesInputObjectSchema: z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutVehiclesInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutVehiclesInput>;
export const CompanyUpdateToOneWithWhereWithoutVehiclesInputObjectZodSchema = makeSchema();
