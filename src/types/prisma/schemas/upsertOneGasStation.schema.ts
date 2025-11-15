import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasStationSelectObjectSchema as GasStationSelectObjectSchema } from './objects/GasStationSelect.schema';
import { GasStationWhereUniqueInputObjectSchema as GasStationWhereUniqueInputObjectSchema } from './objects/GasStationWhereUniqueInput.schema';
import { GasStationCreateInputObjectSchema as GasStationCreateInputObjectSchema } from './objects/GasStationCreateInput.schema';
import { GasStationUncheckedCreateInputObjectSchema as GasStationUncheckedCreateInputObjectSchema } from './objects/GasStationUncheckedCreateInput.schema';
import { GasStationUpdateInputObjectSchema as GasStationUpdateInputObjectSchema } from './objects/GasStationUpdateInput.schema';
import { GasStationUncheckedUpdateInputObjectSchema as GasStationUncheckedUpdateInputObjectSchema } from './objects/GasStationUncheckedUpdateInput.schema';

export const GasStationUpsertOneSchema: z.ZodType<Prisma.GasStationUpsertArgs> = z.object({ select: GasStationSelectObjectSchema.optional(),  where: GasStationWhereUniqueInputObjectSchema, create: z.union([ GasStationCreateInputObjectSchema, GasStationUncheckedCreateInputObjectSchema ]), update: z.union([ GasStationUpdateInputObjectSchema, GasStationUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.GasStationUpsertArgs>;

export const GasStationUpsertOneZodSchema = z.object({ select: GasStationSelectObjectSchema.optional(),  where: GasStationWhereUniqueInputObjectSchema, create: z.union([ GasStationCreateInputObjectSchema, GasStationUncheckedCreateInputObjectSchema ]), update: z.union([ GasStationUpdateInputObjectSchema, GasStationUncheckedUpdateInputObjectSchema ]) }).strict();