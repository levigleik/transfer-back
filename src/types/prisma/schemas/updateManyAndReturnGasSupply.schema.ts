import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasSupplySelectObjectSchema as GasSupplySelectObjectSchema } from './objects/GasSupplySelect.schema';
import { GasSupplyUpdateManyMutationInputObjectSchema as GasSupplyUpdateManyMutationInputObjectSchema } from './objects/GasSupplyUpdateManyMutationInput.schema';
import { GasSupplyWhereInputObjectSchema as GasSupplyWhereInputObjectSchema } from './objects/GasSupplyWhereInput.schema';

export const GasSupplyUpdateManyAndReturnSchema: z.ZodType<Prisma.GasSupplyUpdateManyAndReturnArgs> = z.object({ select: GasSupplySelectObjectSchema.optional(), data: GasSupplyUpdateManyMutationInputObjectSchema, where: GasSupplyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GasSupplyUpdateManyAndReturnArgs>;

export const GasSupplyUpdateManyAndReturnZodSchema = z.object({ select: GasSupplySelectObjectSchema.optional(), data: GasSupplyUpdateManyMutationInputObjectSchema, where: GasSupplyWhereInputObjectSchema.optional() }).strict();