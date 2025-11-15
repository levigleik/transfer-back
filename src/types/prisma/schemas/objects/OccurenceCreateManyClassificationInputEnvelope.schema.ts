import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceCreateManyClassificationInputObjectSchema as OccurenceCreateManyClassificationInputObjectSchema } from './OccurenceCreateManyClassificationInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => OccurenceCreateManyClassificationInputObjectSchema), z.lazy(() => OccurenceCreateManyClassificationInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const OccurenceCreateManyClassificationInputEnvelopeObjectSchema: z.ZodType<Prisma.OccurenceCreateManyClassificationInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceCreateManyClassificationInputEnvelope>;
export const OccurenceCreateManyClassificationInputEnvelopeObjectZodSchema = makeSchema();
