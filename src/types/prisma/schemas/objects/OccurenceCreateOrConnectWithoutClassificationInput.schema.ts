import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OccurenceWhereUniqueInputObjectSchema as OccurenceWhereUniqueInputObjectSchema } from './OccurenceWhereUniqueInput.schema';
import { OccurenceCreateWithoutClassificationInputObjectSchema as OccurenceCreateWithoutClassificationInputObjectSchema } from './OccurenceCreateWithoutClassificationInput.schema';
import { OccurenceUncheckedCreateWithoutClassificationInputObjectSchema as OccurenceUncheckedCreateWithoutClassificationInputObjectSchema } from './OccurenceUncheckedCreateWithoutClassificationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OccurenceWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => OccurenceCreateWithoutClassificationInputObjectSchema), z.lazy(() => OccurenceUncheckedCreateWithoutClassificationInputObjectSchema)])
}).strict();
export const OccurenceCreateOrConnectWithoutClassificationInputObjectSchema: z.ZodType<Prisma.OccurenceCreateOrConnectWithoutClassificationInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceCreateOrConnectWithoutClassificationInput>;
export const OccurenceCreateOrConnectWithoutClassificationInputObjectZodSchema = makeSchema();
