import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasCreateWithoutGasSuppliesInputObjectSchema as GasCreateWithoutGasSuppliesInputObjectSchema } from './GasCreateWithoutGasSuppliesInput.schema';
import { GasUncheckedCreateWithoutGasSuppliesInputObjectSchema as GasUncheckedCreateWithoutGasSuppliesInputObjectSchema } from './GasUncheckedCreateWithoutGasSuppliesInput.schema';
import { GasCreateOrConnectWithoutGasSuppliesInputObjectSchema as GasCreateOrConnectWithoutGasSuppliesInputObjectSchema } from './GasCreateOrConnectWithoutGasSuppliesInput.schema';
import { GasUpsertWithoutGasSuppliesInputObjectSchema as GasUpsertWithoutGasSuppliesInputObjectSchema } from './GasUpsertWithoutGasSuppliesInput.schema';
import { GasWhereUniqueInputObjectSchema as GasWhereUniqueInputObjectSchema } from './GasWhereUniqueInput.schema';
import { GasUpdateToOneWithWhereWithoutGasSuppliesInputObjectSchema as GasUpdateToOneWithWhereWithoutGasSuppliesInputObjectSchema } from './GasUpdateToOneWithWhereWithoutGasSuppliesInput.schema';
import { GasUpdateWithoutGasSuppliesInputObjectSchema as GasUpdateWithoutGasSuppliesInputObjectSchema } from './GasUpdateWithoutGasSuppliesInput.schema';
import { GasUncheckedUpdateWithoutGasSuppliesInputObjectSchema as GasUncheckedUpdateWithoutGasSuppliesInputObjectSchema } from './GasUncheckedUpdateWithoutGasSuppliesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GasCreateWithoutGasSuppliesInputObjectSchema), z.lazy(() => GasUncheckedCreateWithoutGasSuppliesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GasCreateOrConnectWithoutGasSuppliesInputObjectSchema).optional(),
  upsert: z.lazy(() => GasUpsertWithoutGasSuppliesInputObjectSchema).optional(),
  connect: z.lazy(() => GasWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => GasUpdateToOneWithWhereWithoutGasSuppliesInputObjectSchema), z.lazy(() => GasUpdateWithoutGasSuppliesInputObjectSchema), z.lazy(() => GasUncheckedUpdateWithoutGasSuppliesInputObjectSchema)]).optional()
}).strict();
export const GasUpdateOneRequiredWithoutGasSuppliesNestedInputObjectSchema: z.ZodType<Prisma.GasUpdateOneRequiredWithoutGasSuppliesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.GasUpdateOneRequiredWithoutGasSuppliesNestedInput>;
export const GasUpdateOneRequiredWithoutGasSuppliesNestedInputObjectZodSchema = makeSchema();
