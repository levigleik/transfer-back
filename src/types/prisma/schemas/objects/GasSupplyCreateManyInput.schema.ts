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
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const GasSupplyCreateManyInputObjectSchema: z.ZodType<Prisma.GasSupplyCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyCreateManyInput>;
export const GasSupplyCreateManyInputObjectZodSchema = makeSchema();
