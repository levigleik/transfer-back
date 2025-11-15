import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasSupplyUpdateManyMutationInputObjectSchema as GasSupplyUpdateManyMutationInputObjectSchema } from './objects/GasSupplyUpdateManyMutationInput.schema';
import { GasSupplyWhereInputObjectSchema as GasSupplyWhereInputObjectSchema } from './objects/GasSupplyWhereInput.schema';

export const GasSupplyUpdateManySchema: z.ZodType<Prisma.GasSupplyUpdateManyArgs> = z.object({ data: GasSupplyUpdateManyMutationInputObjectSchema, where: GasSupplyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GasSupplyUpdateManyArgs>;

export const GasSupplyUpdateManyZodSchema = z.object({ data: GasSupplyUpdateManyMutationInputObjectSchema, where: GasSupplyWhereInputObjectSchema.optional() }).strict();