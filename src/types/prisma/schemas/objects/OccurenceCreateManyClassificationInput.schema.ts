import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  date: z.coerce.date(),
  description: z.string(),
  seriousnessId: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const OccurenceCreateManyClassificationInputObjectSchema: z.ZodType<Prisma.OccurenceCreateManyClassificationInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceCreateManyClassificationInput>;
export const OccurenceCreateManyClassificationInputObjectZodSchema = makeSchema();
