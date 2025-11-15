import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasUpdateWithoutGasSuppliesInputObjectSchema as GasUpdateWithoutGasSuppliesInputObjectSchema } from './GasUpdateWithoutGasSuppliesInput.schema';
import { GasUncheckedUpdateWithoutGasSuppliesInputObjectSchema as GasUncheckedUpdateWithoutGasSuppliesInputObjectSchema } from './GasUncheckedUpdateWithoutGasSuppliesInput.schema';
import { GasCreateWithoutGasSuppliesInputObjectSchema as GasCreateWithoutGasSuppliesInputObjectSchema } from './GasCreateWithoutGasSuppliesInput.schema';
import { GasUncheckedCreateWithoutGasSuppliesInputObjectSchema as GasUncheckedCreateWithoutGasSuppliesInputObjectSchema } from './GasUncheckedCreateWithoutGasSuppliesInput.schema';
import { GasWhereInputObjectSchema as GasWhereInputObjectSchema } from './GasWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => GasUpdateWithoutGasSuppliesInputObjectSchema), z.lazy(() => GasUncheckedUpdateWithoutGasSuppliesInputObjectSchema)]),
  create: z.union([z.lazy(() => GasCreateWithoutGasSuppliesInputObjectSchema), z.lazy(() => GasUncheckedCreateWithoutGasSuppliesInputObjectSchema)]),
  where: z.lazy(() => GasWhereInputObjectSchema).optional()
}).strict();
export const GasUpsertWithoutGasSuppliesInputObjectSchema: z.ZodType<Prisma.GasUpsertWithoutGasSuppliesInput> = makeSchema() as unknown as z.ZodType<Prisma.GasUpsertWithoutGasSuppliesInput>;
export const GasUpsertWithoutGasSuppliesInputObjectZodSchema = makeSchema();
