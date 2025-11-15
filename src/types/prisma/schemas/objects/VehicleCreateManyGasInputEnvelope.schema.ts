import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleCreateManyGasInputObjectSchema as VehicleCreateManyGasInputObjectSchema } from './VehicleCreateManyGasInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => VehicleCreateManyGasInputObjectSchema), z.lazy(() => VehicleCreateManyGasInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const VehicleCreateManyGasInputEnvelopeObjectSchema: z.ZodType<Prisma.VehicleCreateManyGasInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.VehicleCreateManyGasInputEnvelope>;
export const VehicleCreateManyGasInputEnvelopeObjectZodSchema = makeSchema();
