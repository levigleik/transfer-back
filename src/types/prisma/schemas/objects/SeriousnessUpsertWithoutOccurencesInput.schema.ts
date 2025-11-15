import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeriousnessUpdateWithoutOccurencesInputObjectSchema as SeriousnessUpdateWithoutOccurencesInputObjectSchema } from './SeriousnessUpdateWithoutOccurencesInput.schema';
import { SeriousnessUncheckedUpdateWithoutOccurencesInputObjectSchema as SeriousnessUncheckedUpdateWithoutOccurencesInputObjectSchema } from './SeriousnessUncheckedUpdateWithoutOccurencesInput.schema';
import { SeriousnessCreateWithoutOccurencesInputObjectSchema as SeriousnessCreateWithoutOccurencesInputObjectSchema } from './SeriousnessCreateWithoutOccurencesInput.schema';
import { SeriousnessUncheckedCreateWithoutOccurencesInputObjectSchema as SeriousnessUncheckedCreateWithoutOccurencesInputObjectSchema } from './SeriousnessUncheckedCreateWithoutOccurencesInput.schema';
import { SeriousnessWhereInputObjectSchema as SeriousnessWhereInputObjectSchema } from './SeriousnessWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SeriousnessUpdateWithoutOccurencesInputObjectSchema), z.lazy(() => SeriousnessUncheckedUpdateWithoutOccurencesInputObjectSchema)]),
  create: z.union([z.lazy(() => SeriousnessCreateWithoutOccurencesInputObjectSchema), z.lazy(() => SeriousnessUncheckedCreateWithoutOccurencesInputObjectSchema)]),
  where: z.lazy(() => SeriousnessWhereInputObjectSchema).optional()
}).strict();
export const SeriousnessUpsertWithoutOccurencesInputObjectSchema: z.ZodType<Prisma.SeriousnessUpsertWithoutOccurencesInput> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessUpsertWithoutOccurencesInput>;
export const SeriousnessUpsertWithoutOccurencesInputObjectZodSchema = makeSchema();
