import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceCreateNestedManyWithoutSeriousnessInputObjectSchema as OccurenceCreateNestedManyWithoutSeriousnessInputObjectSchema } from './OccurenceCreateNestedManyWithoutSeriousnessInput.schema'

const makeSchema = () => z.object({
  level: z.string(),
  createdAt: z.coerce.date().optional(),
  occurences: z.lazy(() => OccurenceCreateNestedManyWithoutSeriousnessInputObjectSchema)
}).strict();
export const SeriousnessCreateInputObjectSchema: z.ZodType<Prisma.SeriousnessCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessCreateInput>;
export const SeriousnessCreateInputObjectZodSchema = makeSchema();
