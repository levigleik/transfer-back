import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeriousnessWhereInputObjectSchema as SeriousnessWhereInputObjectSchema } from './SeriousnessWhereInput.schema';
import { SeriousnessUpdateWithoutOccurencesInputObjectSchema as SeriousnessUpdateWithoutOccurencesInputObjectSchema } from './SeriousnessUpdateWithoutOccurencesInput.schema';
import { SeriousnessUncheckedUpdateWithoutOccurencesInputObjectSchema as SeriousnessUncheckedUpdateWithoutOccurencesInputObjectSchema } from './SeriousnessUncheckedUpdateWithoutOccurencesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SeriousnessWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SeriousnessUpdateWithoutOccurencesInputObjectSchema), z.lazy(() => SeriousnessUncheckedUpdateWithoutOccurencesInputObjectSchema)])
}).strict();
export const SeriousnessUpdateToOneWithWhereWithoutOccurencesInputObjectSchema: z.ZodType<Prisma.SeriousnessUpdateToOneWithWhereWithoutOccurencesInput> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessUpdateToOneWithWhereWithoutOccurencesInput>;
export const SeriousnessUpdateToOneWithWhereWithoutOccurencesInputObjectZodSchema = makeSchema();
