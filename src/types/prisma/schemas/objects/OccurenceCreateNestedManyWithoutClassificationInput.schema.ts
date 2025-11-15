import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceCreateWithoutClassificationInputObjectSchema as OccurenceCreateWithoutClassificationInputObjectSchema } from './OccurenceCreateWithoutClassificationInput.schema';
import { OccurenceUncheckedCreateWithoutClassificationInputObjectSchema as OccurenceUncheckedCreateWithoutClassificationInputObjectSchema } from './OccurenceUncheckedCreateWithoutClassificationInput.schema';
import { OccurenceCreateOrConnectWithoutClassificationInputObjectSchema as OccurenceCreateOrConnectWithoutClassificationInputObjectSchema } from './OccurenceCreateOrConnectWithoutClassificationInput.schema';
import { OccurenceCreateManyClassificationInputEnvelopeObjectSchema as OccurenceCreateManyClassificationInputEnvelopeObjectSchema } from './OccurenceCreateManyClassificationInputEnvelope.schema';
import { OccurenceWhereUniqueInputObjectSchema as OccurenceWhereUniqueInputObjectSchema } from './OccurenceWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => OccurenceCreateWithoutClassificationInputObjectSchema), z.lazy(() => OccurenceCreateWithoutClassificationInputObjectSchema).array(), z.lazy(() => OccurenceUncheckedCreateWithoutClassificationInputObjectSchema), z.lazy(() => OccurenceUncheckedCreateWithoutClassificationInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => OccurenceCreateOrConnectWithoutClassificationInputObjectSchema), z.lazy(() => OccurenceCreateOrConnectWithoutClassificationInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => OccurenceCreateManyClassificationInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => OccurenceWhereUniqueInputObjectSchema), z.lazy(() => OccurenceWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const OccurenceCreateNestedManyWithoutClassificationInputObjectSchema: z.ZodType<Prisma.OccurenceCreateNestedManyWithoutClassificationInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceCreateNestedManyWithoutClassificationInput>;
export const OccurenceCreateNestedManyWithoutClassificationInputObjectZodSchema = makeSchema();
