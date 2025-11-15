import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasWhereUniqueInputObjectSchema as GasWhereUniqueInputObjectSchema } from './GasWhereUniqueInput.schema';
import { GasCreateWithoutGasSuppliesInputObjectSchema as GasCreateWithoutGasSuppliesInputObjectSchema } from './GasCreateWithoutGasSuppliesInput.schema';
import { GasUncheckedCreateWithoutGasSuppliesInputObjectSchema as GasUncheckedCreateWithoutGasSuppliesInputObjectSchema } from './GasUncheckedCreateWithoutGasSuppliesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GasWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GasCreateWithoutGasSuppliesInputObjectSchema), z.lazy(() => GasUncheckedCreateWithoutGasSuppliesInputObjectSchema)])
}).strict();
export const GasCreateOrConnectWithoutGasSuppliesInputObjectSchema: z.ZodType<Prisma.GasCreateOrConnectWithoutGasSuppliesInput> = makeSchema() as unknown as z.ZodType<Prisma.GasCreateOrConnectWithoutGasSuppliesInput>;
export const GasCreateOrConnectWithoutGasSuppliesInputObjectZodSchema = makeSchema();
