import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeriousnessCreateWithoutOccurencesInputObjectSchema as SeriousnessCreateWithoutOccurencesInputObjectSchema } from './SeriousnessCreateWithoutOccurencesInput.schema';
import { SeriousnessUncheckedCreateWithoutOccurencesInputObjectSchema as SeriousnessUncheckedCreateWithoutOccurencesInputObjectSchema } from './SeriousnessUncheckedCreateWithoutOccurencesInput.schema';
import { SeriousnessCreateOrConnectWithoutOccurencesInputObjectSchema as SeriousnessCreateOrConnectWithoutOccurencesInputObjectSchema } from './SeriousnessCreateOrConnectWithoutOccurencesInput.schema';
import { SeriousnessUpsertWithoutOccurencesInputObjectSchema as SeriousnessUpsertWithoutOccurencesInputObjectSchema } from './SeriousnessUpsertWithoutOccurencesInput.schema';
import { SeriousnessWhereUniqueInputObjectSchema as SeriousnessWhereUniqueInputObjectSchema } from './SeriousnessWhereUniqueInput.schema';
import { SeriousnessUpdateToOneWithWhereWithoutOccurencesInputObjectSchema as SeriousnessUpdateToOneWithWhereWithoutOccurencesInputObjectSchema } from './SeriousnessUpdateToOneWithWhereWithoutOccurencesInput.schema';
import { SeriousnessUpdateWithoutOccurencesInputObjectSchema as SeriousnessUpdateWithoutOccurencesInputObjectSchema } from './SeriousnessUpdateWithoutOccurencesInput.schema';
import { SeriousnessUncheckedUpdateWithoutOccurencesInputObjectSchema as SeriousnessUncheckedUpdateWithoutOccurencesInputObjectSchema } from './SeriousnessUncheckedUpdateWithoutOccurencesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SeriousnessCreateWithoutOccurencesInputObjectSchema), z.lazy(() => SeriousnessUncheckedCreateWithoutOccurencesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SeriousnessCreateOrConnectWithoutOccurencesInputObjectSchema).optional(),
  upsert: z.lazy(() => SeriousnessUpsertWithoutOccurencesInputObjectSchema).optional(),
  connect: z.lazy(() => SeriousnessWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SeriousnessUpdateToOneWithWhereWithoutOccurencesInputObjectSchema), z.lazy(() => SeriousnessUpdateWithoutOccurencesInputObjectSchema), z.lazy(() => SeriousnessUncheckedUpdateWithoutOccurencesInputObjectSchema)]).optional()
}).strict();
export const SeriousnessUpdateOneRequiredWithoutOccurencesNestedInputObjectSchema: z.ZodType<Prisma.SeriousnessUpdateOneRequiredWithoutOccurencesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessUpdateOneRequiredWithoutOccurencesNestedInput>;
export const SeriousnessUpdateOneRequiredWithoutOccurencesNestedInputObjectZodSchema = makeSchema();
