import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasStationSelectObjectSchema as GasStationSelectObjectSchema } from './objects/GasStationSelect.schema';
import { GasStationWhereUniqueInputObjectSchema as GasStationWhereUniqueInputObjectSchema } from './objects/GasStationWhereUniqueInput.schema';

export const GasStationDeleteOneSchema: z.ZodType<Prisma.GasStationDeleteArgs> = z.object({ select: GasStationSelectObjectSchema.optional(),  where: GasStationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GasStationDeleteArgs>;

export const GasStationDeleteOneZodSchema = z.object({ select: GasStationSelectObjectSchema.optional(),  where: GasStationWhereUniqueInputObjectSchema }).strict();