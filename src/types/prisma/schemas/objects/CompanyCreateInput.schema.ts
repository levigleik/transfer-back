import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleCreateNestedManyWithoutCompanyInputObjectSchema as VehicleCreateNestedManyWithoutCompanyInputObjectSchema } from './VehicleCreateNestedManyWithoutCompanyInput.schema'

const makeSchema = () => z.object({
  name: z.string(),
  cnpj: z.string(),
  createdAt: z.coerce.date().optional(),
  vehicles: z.lazy(() => VehicleCreateNestedManyWithoutCompanyInputObjectSchema)
}).strict();
export const CompanyCreateInputObjectSchema: z.ZodType<Prisma.CompanyCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyCreateInput>;
export const CompanyCreateInputObjectZodSchema = makeSchema();
