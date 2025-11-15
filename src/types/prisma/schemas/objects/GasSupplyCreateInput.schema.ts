import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasCreateNestedOneWithoutGasSuppliesInputObjectSchema as GasCreateNestedOneWithoutGasSuppliesInputObjectSchema } from './GasCreateNestedOneWithoutGasSuppliesInput.schema'

const makeSchema = () => z.object({
  kmToReview: z.number().int(),
  kmToStop: z.number().int(),
  quantity: z.number(),
  supplyAt: z.coerce.date(),
  totalPrice: z.number(),
  createdAt: z.coerce.date().optional(),
  gas: z.lazy(() => GasCreateNestedOneWithoutGasSuppliesInputObjectSchema)
}).strict();
export const GasSupplyCreateInputObjectSchema: z.ZodType<Prisma.GasSupplyCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyCreateInput>;
export const GasSupplyCreateInputObjectZodSchema = makeSchema();
