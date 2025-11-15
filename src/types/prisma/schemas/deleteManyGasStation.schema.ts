import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasStationWhereInputObjectSchema as GasStationWhereInputObjectSchema } from './objects/GasStationWhereInput.schema';

export const GasStationDeleteManySchema: z.ZodType<Prisma.GasStationDeleteManyArgs> = z.object({ where: GasStationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GasStationDeleteManyArgs>;

export const GasStationDeleteManyZodSchema = z.object({ where: GasStationWhereInputObjectSchema.optional() }).strict();