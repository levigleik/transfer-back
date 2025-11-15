import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasWhereInputObjectSchema as GasWhereInputObjectSchema } from './GasWhereInput.schema';
import { GasUpdateWithoutGasSuppliesInputObjectSchema as GasUpdateWithoutGasSuppliesInputObjectSchema } from './GasUpdateWithoutGasSuppliesInput.schema';
import { GasUncheckedUpdateWithoutGasSuppliesInputObjectSchema as GasUncheckedUpdateWithoutGasSuppliesInputObjectSchema } from './GasUncheckedUpdateWithoutGasSuppliesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GasWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => GasUpdateWithoutGasSuppliesInputObjectSchema), z.lazy(() => GasUncheckedUpdateWithoutGasSuppliesInputObjectSchema)])
}).strict();
export const GasUpdateToOneWithWhereWithoutGasSuppliesInputObjectSchema: z.ZodType<Prisma.GasUpdateToOneWithWhereWithoutGasSuppliesInput> = makeSchema() as unknown as z.ZodType<Prisma.GasUpdateToOneWithWhereWithoutGasSuppliesInput>;
export const GasUpdateToOneWithWhereWithoutGasSuppliesInputObjectZodSchema = makeSchema();
