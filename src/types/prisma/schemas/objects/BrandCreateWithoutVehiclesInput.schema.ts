import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const BrandCreateWithoutVehiclesInputObjectSchema: z.ZodType<Prisma.BrandCreateWithoutVehiclesInput> = makeSchema() as unknown as z.ZodType<Prisma.BrandCreateWithoutVehiclesInput>;
export const BrandCreateWithoutVehiclesInputObjectZodSchema = makeSchema();
