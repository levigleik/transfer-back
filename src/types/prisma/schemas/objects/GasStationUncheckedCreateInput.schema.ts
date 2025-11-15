import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const GasStationUncheckedCreateInputObjectSchema: z.ZodType<Prisma.GasStationUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GasStationUncheckedCreateInput>;
export const GasStationUncheckedCreateInputObjectZodSchema = makeSchema();
