import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceUncheckedCreateNestedManyWithoutSeriousnessInputObjectSchema as OccurenceUncheckedCreateNestedManyWithoutSeriousnessInputObjectSchema } from './OccurenceUncheckedCreateNestedManyWithoutSeriousnessInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  level: z.string(),
  createdAt: z.coerce.date().optional(),
  occurences: z.lazy(() => OccurenceUncheckedCreateNestedManyWithoutSeriousnessInputObjectSchema)
}).strict();
export const SeriousnessUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SeriousnessUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessUncheckedCreateInput>;
export const SeriousnessUncheckedCreateInputObjectZodSchema = makeSchema();
