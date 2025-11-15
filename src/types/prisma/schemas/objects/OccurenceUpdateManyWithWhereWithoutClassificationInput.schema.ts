import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceScalarWhereInputObjectSchema as OccurenceScalarWhereInputObjectSchema } from './OccurenceScalarWhereInput.schema';
import { OccurenceUpdateManyMutationInputObjectSchema as OccurenceUpdateManyMutationInputObjectSchema } from './OccurenceUpdateManyMutationInput.schema';
import { OccurenceUncheckedUpdateManyWithoutClassificationInputObjectSchema as OccurenceUncheckedUpdateManyWithoutClassificationInputObjectSchema } from './OccurenceUncheckedUpdateManyWithoutClassificationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OccurenceScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OccurenceUpdateManyMutationInputObjectSchema), z.lazy(() => OccurenceUncheckedUpdateManyWithoutClassificationInputObjectSchema)])
}).strict();
export const OccurenceUpdateManyWithWhereWithoutClassificationInputObjectSchema: z.ZodType<Prisma.OccurenceUpdateManyWithWhereWithoutClassificationInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceUpdateManyWithWhereWithoutClassificationInput>;
export const OccurenceUpdateManyWithWhereWithoutClassificationInputObjectZodSchema = makeSchema();
