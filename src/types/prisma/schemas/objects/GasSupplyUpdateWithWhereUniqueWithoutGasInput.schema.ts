import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasSupplyWhereUniqueInputObjectSchema as GasSupplyWhereUniqueInputObjectSchema } from './GasSupplyWhereUniqueInput.schema';
import { GasSupplyUpdateWithoutGasInputObjectSchema as GasSupplyUpdateWithoutGasInputObjectSchema } from './GasSupplyUpdateWithoutGasInput.schema';
import { GasSupplyUncheckedUpdateWithoutGasInputObjectSchema as GasSupplyUncheckedUpdateWithoutGasInputObjectSchema } from './GasSupplyUncheckedUpdateWithoutGasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GasSupplyWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GasSupplyUpdateWithoutGasInputObjectSchema), z.lazy(() => GasSupplyUncheckedUpdateWithoutGasInputObjectSchema)])
}).strict();
export const GasSupplyUpdateWithWhereUniqueWithoutGasInputObjectSchema: z.ZodType<Prisma.GasSupplyUpdateWithWhereUniqueWithoutGasInput> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyUpdateWithWhereUniqueWithoutGasInput>;
export const GasSupplyUpdateWithWhereUniqueWithoutGasInputObjectZodSchema = makeSchema();
