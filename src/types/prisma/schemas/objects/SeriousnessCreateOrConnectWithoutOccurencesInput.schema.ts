import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeriousnessWhereUniqueInputObjectSchema as SeriousnessWhereUniqueInputObjectSchema } from './SeriousnessWhereUniqueInput.schema';
import { SeriousnessCreateWithoutOccurencesInputObjectSchema as SeriousnessCreateWithoutOccurencesInputObjectSchema } from './SeriousnessCreateWithoutOccurencesInput.schema';
import { SeriousnessUncheckedCreateWithoutOccurencesInputObjectSchema as SeriousnessUncheckedCreateWithoutOccurencesInputObjectSchema } from './SeriousnessUncheckedCreateWithoutOccurencesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SeriousnessWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SeriousnessCreateWithoutOccurencesInputObjectSchema), z.lazy(() => SeriousnessUncheckedCreateWithoutOccurencesInputObjectSchema)])
}).strict();
export const SeriousnessCreateOrConnectWithoutOccurencesInputObjectSchema: z.ZodType<Prisma.SeriousnessCreateOrConnectWithoutOccurencesInput> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessCreateOrConnectWithoutOccurencesInput>;
export const SeriousnessCreateOrConnectWithoutOccurencesInputObjectZodSchema = makeSchema();
