import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasSupplyWhereUniqueInputObjectSchema as GasSupplyWhereUniqueInputObjectSchema } from './GasSupplyWhereUniqueInput.schema';
import { GasSupplyCreateWithoutGasInputObjectSchema as GasSupplyCreateWithoutGasInputObjectSchema } from './GasSupplyCreateWithoutGasInput.schema';
import { GasSupplyUncheckedCreateWithoutGasInputObjectSchema as GasSupplyUncheckedCreateWithoutGasInputObjectSchema } from './GasSupplyUncheckedCreateWithoutGasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GasSupplyWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GasSupplyCreateWithoutGasInputObjectSchema), z.lazy(() => GasSupplyUncheckedCreateWithoutGasInputObjectSchema)])
}).strict();
export const GasSupplyCreateOrConnectWithoutGasInputObjectSchema: z.ZodType<Prisma.GasSupplyCreateOrConnectWithoutGasInput> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyCreateOrConnectWithoutGasInput>;
export const GasSupplyCreateOrConnectWithoutGasInputObjectZodSchema = makeSchema();
