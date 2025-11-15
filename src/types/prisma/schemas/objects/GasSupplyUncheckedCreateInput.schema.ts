import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  kmToReview: z.number().int(),
  kmToStop: z.number().int(),
  quantity: z.number(),
  supplyAt: z.coerce.date(),
  totalPrice: z.number(),
  gasId: z.number().int(),
  createdAt: z.coerce.date().optional()
}).strict();
export const GasSupplyUncheckedCreateInputObjectSchema: z.ZodType<Prisma.GasSupplyUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyUncheckedCreateInput>;
export const GasSupplyUncheckedCreateInputObjectZodSchema = makeSchema();
