import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  cnpj: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CompanyUncheckedCreateWithoutVehiclesInputObjectSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutVehiclesInput> = makeSchema() as unknown as z.ZodType<Prisma.CompanyUncheckedCreateWithoutVehiclesInput>;
export const CompanyUncheckedCreateWithoutVehiclesInputObjectZodSchema = makeSchema();
