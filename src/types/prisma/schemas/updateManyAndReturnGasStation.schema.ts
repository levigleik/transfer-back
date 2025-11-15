import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasStationSelectObjectSchema as GasStationSelectObjectSchema } from './objects/GasStationSelect.schema';
import { GasStationUpdateManyMutationInputObjectSchema as GasStationUpdateManyMutationInputObjectSchema } from './objects/GasStationUpdateManyMutationInput.schema';
import { GasStationWhereInputObjectSchema as GasStationWhereInputObjectSchema } from './objects/GasStationWhereInput.schema';

export const GasStationUpdateManyAndReturnSchema: z.ZodType<Prisma.GasStationUpdateManyAndReturnArgs> = z.object({ select: GasStationSelectObjectSchema.optional(), data: GasStationUpdateManyMutationInputObjectSchema, where: GasStationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GasStationUpdateManyAndReturnArgs>;

export const GasStationUpdateManyAndReturnZodSchema = z.object({ select: GasStationSelectObjectSchema.optional(), data: GasStationUpdateManyMutationInputObjectSchema, where: GasStationWhereInputObjectSchema.optional() }).strict();