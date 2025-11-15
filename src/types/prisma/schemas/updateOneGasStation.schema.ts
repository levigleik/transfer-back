import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasStationSelectObjectSchema as GasStationSelectObjectSchema } from './objects/GasStationSelect.schema';
import { GasStationUpdateInputObjectSchema as GasStationUpdateInputObjectSchema } from './objects/GasStationUpdateInput.schema';
import { GasStationUncheckedUpdateInputObjectSchema as GasStationUncheckedUpdateInputObjectSchema } from './objects/GasStationUncheckedUpdateInput.schema';
import { GasStationWhereUniqueInputObjectSchema as GasStationWhereUniqueInputObjectSchema } from './objects/GasStationWhereUniqueInput.schema';

export const GasStationUpdateOneSchema: z.ZodType<Prisma.GasStationUpdateArgs> = z.object({ select: GasStationSelectObjectSchema.optional(),  data: z.union([GasStationUpdateInputObjectSchema, GasStationUncheckedUpdateInputObjectSchema]), where: GasStationWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GasStationUpdateArgs>;

export const GasStationUpdateOneZodSchema = z.object({ select: GasStationSelectObjectSchema.optional(),  data: z.union([GasStationUpdateInputObjectSchema, GasStationUncheckedUpdateInputObjectSchema]), where: GasStationWhereUniqueInputObjectSchema }).strict();