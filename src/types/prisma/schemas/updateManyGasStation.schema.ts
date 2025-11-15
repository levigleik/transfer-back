import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasStationUpdateManyMutationInputObjectSchema as GasStationUpdateManyMutationInputObjectSchema } from './objects/GasStationUpdateManyMutationInput.schema';
import { GasStationWhereInputObjectSchema as GasStationWhereInputObjectSchema } from './objects/GasStationWhereInput.schema';

export const GasStationUpdateManySchema: z.ZodType<Prisma.GasStationUpdateManyArgs> = z.object({ data: GasStationUpdateManyMutationInputObjectSchema, where: GasStationWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GasStationUpdateManyArgs>;

export const GasStationUpdateManyZodSchema = z.object({ data: GasStationUpdateManyMutationInputObjectSchema, where: GasStationWhereInputObjectSchema.optional() }).strict();