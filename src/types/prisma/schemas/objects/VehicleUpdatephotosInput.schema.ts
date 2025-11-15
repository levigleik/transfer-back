import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
export const VehicleUpdatephotosInputObjectSchema: z.ZodType<Prisma.VehicleUpdatephotosInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleUpdatephotosInput>;
export const VehicleUpdatephotosInputObjectZodSchema = makeSchema();
