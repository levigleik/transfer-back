import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasSupplyScalarWhereInputObjectSchema as GasSupplyScalarWhereInputObjectSchema } from './GasSupplyScalarWhereInput.schema';
import { GasSupplyUpdateManyMutationInputObjectSchema as GasSupplyUpdateManyMutationInputObjectSchema } from './GasSupplyUpdateManyMutationInput.schema';
import { GasSupplyUncheckedUpdateManyWithoutGasInputObjectSchema as GasSupplyUncheckedUpdateManyWithoutGasInputObjectSchema } from './GasSupplyUncheckedUpdateManyWithoutGasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GasSupplyScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => GasSupplyUpdateManyMutationInputObjectSchema), z.lazy(() => GasSupplyUncheckedUpdateManyWithoutGasInputObjectSchema)])
}).strict();
export const GasSupplyUpdateManyWithWhereWithoutGasInputObjectSchema: z.ZodType<Prisma.GasSupplyUpdateManyWithWhereWithoutGasInput> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyUpdateManyWithWhereWithoutGasInput>;
export const GasSupplyUpdateManyWithWhereWithoutGasInputObjectZodSchema = makeSchema();
