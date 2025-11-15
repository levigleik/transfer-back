import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceCreateManySeriousnessInputObjectSchema as OccurenceCreateManySeriousnessInputObjectSchema } from './OccurenceCreateManySeriousnessInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OccurenceCreateManySeriousnessInputObjectSchema), z.lazy(() => OccurenceCreateManySeriousnessInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const OccurenceCreateManySeriousnessInputEnvelopeObjectSchema: z.ZodType<Prisma.OccurenceCreateManySeriousnessInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceCreateManySeriousnessInputEnvelope>;
export const OccurenceCreateManySeriousnessInputEnvelopeObjectZodSchema = makeSchema();
