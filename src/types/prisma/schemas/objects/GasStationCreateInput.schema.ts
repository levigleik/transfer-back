import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  name: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const GasStationCreateInputObjectSchema: z.ZodType<Prisma.GasStationCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GasStationCreateInput>;
export const GasStationCreateInputObjectZodSchema = makeSchema();
