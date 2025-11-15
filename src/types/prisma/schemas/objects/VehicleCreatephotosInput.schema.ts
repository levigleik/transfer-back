import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  set: z.string().array()
}).strict();
export const VehicleCreatephotosInputObjectSchema: z.ZodType<Prisma.VehicleCreatephotosInput> = makeSchema() as unknown as z.ZodType<Prisma.VehicleCreatephotosInput>;
export const VehicleCreatephotosInputObjectZodSchema = makeSchema();
