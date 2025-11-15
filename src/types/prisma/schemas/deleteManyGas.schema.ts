import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasWhereInputObjectSchema as GasWhereInputObjectSchema } from './objects/GasWhereInput.schema';

export const GasDeleteManySchema: z.ZodType<Prisma.GasDeleteManyArgs> = z.object({ where: GasWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GasDeleteManyArgs>;

export const GasDeleteManyZodSchema = z.object({ where: GasWhereInputObjectSchema.optional() }).strict();