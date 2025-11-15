import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const GasStationAvgAggregateInputObjectSchema: z.ZodType<Prisma.GasStationAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GasStationAvgAggregateInputType>;
export const GasStationAvgAggregateInputObjectZodSchema = makeSchema();
