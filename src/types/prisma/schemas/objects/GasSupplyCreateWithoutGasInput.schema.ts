import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  kmToReview: z.number().int(),
  kmToStop: z.number().int(),
  quantity: z.number(),
  supplyAt: z.coerce.date(),
  totalPrice: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const GasSupplyCreateWithoutGasInputObjectSchema: z.ZodType<Prisma.GasSupplyCreateWithoutGasInput> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyCreateWithoutGasInput>;
export const GasSupplyCreateWithoutGasInputObjectZodSchema = makeSchema();
