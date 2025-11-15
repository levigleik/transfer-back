import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  kmToReview: z.number().int(),
  kmToStop: z.number().int(),
  quantity: z.number(),
  supplyAt: z.coerce.date(),
  totalPrice: z.number(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const GasSupplyUncheckedCreateWithoutGasInputObjectSchema: z.ZodType<Prisma.GasSupplyUncheckedCreateWithoutGasInput> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyUncheckedCreateWithoutGasInput>;
export const GasSupplyUncheckedCreateWithoutGasInputObjectZodSchema = makeSchema();
