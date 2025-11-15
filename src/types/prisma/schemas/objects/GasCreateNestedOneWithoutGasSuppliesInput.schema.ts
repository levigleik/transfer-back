import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasCreateWithoutGasSuppliesInputObjectSchema as GasCreateWithoutGasSuppliesInputObjectSchema } from './GasCreateWithoutGasSuppliesInput.schema';
import { GasUncheckedCreateWithoutGasSuppliesInputObjectSchema as GasUncheckedCreateWithoutGasSuppliesInputObjectSchema } from './GasUncheckedCreateWithoutGasSuppliesInput.schema';
import { GasCreateOrConnectWithoutGasSuppliesInputObjectSchema as GasCreateOrConnectWithoutGasSuppliesInputObjectSchema } from './GasCreateOrConnectWithoutGasSuppliesInput.schema';
import { GasWhereUniqueInputObjectSchema as GasWhereUniqueInputObjectSchema } from './GasWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GasCreateWithoutGasSuppliesInputObjectSchema), z.lazy(() => GasUncheckedCreateWithoutGasSuppliesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GasCreateOrConnectWithoutGasSuppliesInputObjectSchema).optional(),
  connect: z.lazy(() => GasWhereUniqueInputObjectSchema).optional()
}).strict();
export const GasCreateNestedOneWithoutGasSuppliesInputObjectSchema: z.ZodType<Prisma.GasCreateNestedOneWithoutGasSuppliesInput> = makeSchema() as unknown as z.ZodType<Prisma.GasCreateNestedOneWithoutGasSuppliesInput>;
export const GasCreateNestedOneWithoutGasSuppliesInputObjectZodSchema = makeSchema();
