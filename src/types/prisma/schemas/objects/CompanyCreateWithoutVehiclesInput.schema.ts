import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  name: z.string(),
  cnpj: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CompanyCreateWithoutVehiclesInputObjectSchema: z.ZodType<Prisma.CompanyCreateWithoutVehiclesInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyCreateWithoutVehiclesInput>;
export const CompanyCreateWithoutVehiclesInputObjectZodSchema = makeSchema();
