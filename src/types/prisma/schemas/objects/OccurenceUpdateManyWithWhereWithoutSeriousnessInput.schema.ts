import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceScalarWhereInputObjectSchema as OccurenceScalarWhereInputObjectSchema } from './OccurenceScalarWhereInput.schema';
import { OccurenceUpdateManyMutationInputObjectSchema as OccurenceUpdateManyMutationInputObjectSchema } from './OccurenceUpdateManyMutationInput.schema';
import { OccurenceUncheckedUpdateManyWithoutSeriousnessInputObjectSchema as OccurenceUncheckedUpdateManyWithoutSeriousnessInputObjectSchema } from './OccurenceUncheckedUpdateManyWithoutSeriousnessInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OccurenceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OccurenceUpdateManyMutationInputObjectSchema), z.lazy(() => OccurenceUncheckedUpdateManyWithoutSeriousnessInputObjectSchema)])
}).strict();
export const OccurenceUpdateManyWithWhereWithoutSeriousnessInputObjectSchema: z.ZodType<Prisma.OccurenceUpdateManyWithWhereWithoutSeriousnessInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceUpdateManyWithWhereWithoutSeriousnessInput>;
export const OccurenceUpdateManyWithWhereWithoutSeriousnessInputObjectZodSchema = makeSchema();
