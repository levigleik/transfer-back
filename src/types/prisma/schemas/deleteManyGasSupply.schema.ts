import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasSupplyWhereInputObjectSchema as GasSupplyWhereInputObjectSchema } from './objects/GasSupplyWhereInput.schema';

export const GasSupplyDeleteManySchema: z.ZodType<Prisma.GasSupplyDeleteManyArgs> = z.object({ where: GasSupplyWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GasSupplyDeleteManyArgs>;

export const GasSupplyDeleteManyZodSchema = z.object({ where: GasSupplyWhereInputObjectSchema.optional() }).strict();