import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasStationSelectObjectSchema as GasStationSelectObjectSchema } from './objects/GasStationSelect.schema';
import { GasStationCreateInputObjectSchema as GasStationCreateInputObjectSchema } from './objects/GasStationCreateInput.schema';
import { GasStationUncheckedCreateInputObjectSchema as GasStationUncheckedCreateInputObjectSchema } from './objects/GasStationUncheckedCreateInput.schema';

export const GasStationCreateOneSchema: z.ZodType<Prisma.GasStationCreateArgs> = z.object({ select: GasStationSelectObjectSchema.optional(),  data: z.union([GasStationCreateInputObjectSchema, GasStationUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.GasStationCreateArgs>;

export const GasStationCreateOneZodSchema = z.object({ select: GasStationSelectObjectSchema.optional(),  data: z.union([GasStationCreateInputObjectSchema, GasStationUncheckedCreateInputObjectSchema]) }).strict();