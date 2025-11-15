import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SeriousnessCreateWithoutOccurencesInputObjectSchema as SeriousnessCreateWithoutOccurencesInputObjectSchema } from './SeriousnessCreateWithoutOccurencesInput.schema';
import { SeriousnessUncheckedCreateWithoutOccurencesInputObjectSchema as SeriousnessUncheckedCreateWithoutOccurencesInputObjectSchema } from './SeriousnessUncheckedCreateWithoutOccurencesInput.schema';
import { SeriousnessCreateOrConnectWithoutOccurencesInputObjectSchema as SeriousnessCreateOrConnectWithoutOccurencesInputObjectSchema } from './SeriousnessCreateOrConnectWithoutOccurencesInput.schema';
import { SeriousnessWhereUniqueInputObjectSchema as SeriousnessWhereUniqueInputObjectSchema } from './SeriousnessWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SeriousnessCreateWithoutOccurencesInputObjectSchema), z.lazy(() => SeriousnessUncheckedCreateWithoutOccurencesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SeriousnessCreateOrConnectWithoutOccurencesInputObjectSchema).optional(),
  connect: z.lazy(() => SeriousnessWhereUniqueInputObjectSchema).optional()
}).strict();
export const SeriousnessCreateNestedOneWithoutOccurencesInputObjectSchema: z.ZodType<Prisma.SeriousnessCreateNestedOneWithoutOccurencesInput> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessCreateNestedOneWithoutOccurencesInput>;
export const SeriousnessCreateNestedOneWithoutOccurencesInputObjectZodSchema = makeSchema();
