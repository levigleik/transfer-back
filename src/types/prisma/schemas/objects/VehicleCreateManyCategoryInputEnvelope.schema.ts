import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleCreateManyCategoryInputObjectSchema as VehicleCreateManyCategoryInputObjectSchema } from './VehicleCreateManyCategoryInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => VehicleCreateManyCategoryInputObjectSchema), z.lazy(() => VehicleCreateManyCategoryInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const VehicleCreateManyCategoryInputEnvelopeObjectSchema: z.ZodType<Prisma.VehicleCreateManyCategoryInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.VehicleCreateManyCategoryInputEnvelope>;
export const VehicleCreateManyCategoryInputEnvelopeObjectZodSchema = makeSchema();
