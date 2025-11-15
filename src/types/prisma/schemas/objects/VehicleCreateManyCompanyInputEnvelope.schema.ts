import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { VehicleCreateManyCompanyInputObjectSchema as VehicleCreateManyCompanyInputObjectSchema } from './VehicleCreateManyCompanyInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => VehicleCreateManyCompanyInputObjectSchema), z.lazy(() => VehicleCreateManyCompanyInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const VehicleCreateManyCompanyInputEnvelopeObjectSchema: z.ZodType<Prisma.VehicleCreateManyCompanyInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.VehicleCreateManyCompanyInputEnvelope>;
export const VehicleCreateManyCompanyInputEnvelopeObjectZodSchema = makeSchema();
