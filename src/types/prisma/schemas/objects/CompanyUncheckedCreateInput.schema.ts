import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleUncheckedCreateNestedManyWithoutCompanyInputObjectSchema as VehicleUncheckedCreateNestedManyWithoutCompanyInputObjectSchema } from './VehicleUncheckedCreateNestedManyWithoutCompanyInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  cnpj: z.string(),
  createdAt: z.coerce.date().optional(),
  vehicles: z.lazy(() => VehicleUncheckedCreateNestedManyWithoutCompanyInputObjectSchema)
}).strict();
export const CompanyUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CompanyUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUncheckedCreateInput>;
export const CompanyUncheckedCreateInputObjectZodSchema = makeSchema();
