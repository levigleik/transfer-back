import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const GasStationSumAggregateInputObjectSchema: z.ZodType<Prisma.GasStationSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GasStationSumAggregateInputType>;
export const GasStationSumAggregateInputObjectZodSchema = makeSchema();
