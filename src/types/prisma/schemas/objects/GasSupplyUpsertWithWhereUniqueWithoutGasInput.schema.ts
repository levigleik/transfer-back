import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasSupplyWhereUniqueInputObjectSchema as GasSupplyWhereUniqueInputObjectSchema } from './GasSupplyWhereUniqueInput.schema';
import { GasSupplyUpdateWithoutGasInputObjectSchema as GasSupplyUpdateWithoutGasInputObjectSchema } from './GasSupplyUpdateWithoutGasInput.schema';
import { GasSupplyUncheckedUpdateWithoutGasInputObjectSchema as GasSupplyUncheckedUpdateWithoutGasInputObjectSchema } from './GasSupplyUncheckedUpdateWithoutGasInput.schema';
import { GasSupplyCreateWithoutGasInputObjectSchema as GasSupplyCreateWithoutGasInputObjectSchema } from './GasSupplyCreateWithoutGasInput.schema';
import { GasSupplyUncheckedCreateWithoutGasInputObjectSchema as GasSupplyUncheckedCreateWithoutGasInputObjectSchema } from './GasSupplyUncheckedCreateWithoutGasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GasSupplyWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => GasSupplyUpdateWithoutGasInputObjectSchema), z.lazy(() => GasSupplyUncheckedUpdateWithoutGasInputObjectSchema)]),
  create: z.union([z.lazy(() => GasSupplyCreateWithoutGasInputObjectSchema), z.lazy(() => GasSupplyUncheckedCreateWithoutGasInputObjectSchema)])
}).strict();
export const GasSupplyUpsertWithWhereUniqueWithoutGasInputObjectSchema: z.ZodType<Prisma.GasSupplyUpsertWithWhereUniqueWithoutGasInput> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyUpsertWithWhereUniqueWithoutGasInput>;
export const GasSupplyUpsertWithWhereUniqueWithoutGasInputObjectZodSchema = makeSchema();
