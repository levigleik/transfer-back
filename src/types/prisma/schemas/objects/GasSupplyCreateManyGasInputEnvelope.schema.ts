import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasSupplyCreateManyGasInputObjectSchema as GasSupplyCreateManyGasInputObjectSchema } from './GasSupplyCreateManyGasInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => GasSupplyCreateManyGasInputObjectSchema), z.lazy(() => GasSupplyCreateManyGasInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const GasSupplyCreateManyGasInputEnvelopeObjectSchema: z.ZodType<Prisma.GasSupplyCreateManyGasInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyCreateManyGasInputEnvelope>;
export const GasSupplyCreateManyGasInputEnvelopeObjectZodSchema = makeSchema();
