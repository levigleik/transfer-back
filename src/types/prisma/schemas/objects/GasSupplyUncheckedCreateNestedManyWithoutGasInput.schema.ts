import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasSupplyCreateWithoutGasInputObjectSchema as GasSupplyCreateWithoutGasInputObjectSchema } from './GasSupplyCreateWithoutGasInput.schema';
import { GasSupplyUncheckedCreateWithoutGasInputObjectSchema as GasSupplyUncheckedCreateWithoutGasInputObjectSchema } from './GasSupplyUncheckedCreateWithoutGasInput.schema';
import { GasSupplyCreateOrConnectWithoutGasInputObjectSchema as GasSupplyCreateOrConnectWithoutGasInputObjectSchema } from './GasSupplyCreateOrConnectWithoutGasInput.schema';
import { GasSupplyCreateManyGasInputEnvelopeObjectSchema as GasSupplyCreateManyGasInputEnvelopeObjectSchema } from './GasSupplyCreateManyGasInputEnvelope.schema';
import { GasSupplyWhereUniqueInputObjectSchema as GasSupplyWhereUniqueInputObjectSchema } from './GasSupplyWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GasSupplyCreateWithoutGasInputObjectSchema), z.lazy(() => GasSupplyCreateWithoutGasInputObjectSchema).array(), z.lazy(() => GasSupplyUncheckedCreateWithoutGasInputObjectSchema), z.lazy(() => GasSupplyUncheckedCreateWithoutGasInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GasSupplyCreateOrConnectWithoutGasInputObjectSchema), z.lazy(() => GasSupplyCreateOrConnectWithoutGasInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GasSupplyCreateManyGasInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => GasSupplyWhereUniqueInputObjectSchema), z.lazy(() => GasSupplyWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const GasSupplyUncheckedCreateNestedManyWithoutGasInputObjectSchema: z.ZodType<Prisma.GasSupplyUncheckedCreateNestedManyWithoutGasInput> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyUncheckedCreateNestedManyWithoutGasInput>;
export const GasSupplyUncheckedCreateNestedManyWithoutGasInputObjectZodSchema = makeSchema();
