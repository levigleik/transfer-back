import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleCreateManyBrandInputObjectSchema as VehicleCreateManyBrandInputObjectSchema } from './VehicleCreateManyBrandInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => VehicleCreateManyBrandInputObjectSchema), z.lazy(() => VehicleCreateManyBrandInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const VehicleCreateManyBrandInputEnvelopeObjectSchema: z.ZodType<Prisma.VehicleCreateManyBrandInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.VehicleCreateManyBrandInputEnvelope>;
export const VehicleCreateManyBrandInputEnvelopeObjectZodSchema = makeSchema();
