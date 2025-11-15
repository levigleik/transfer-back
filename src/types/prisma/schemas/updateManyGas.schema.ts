import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasUpdateManyMutationInputObjectSchema as GasUpdateManyMutationInputObjectSchema } from './objects/GasUpdateManyMutationInput.schema';
import { GasWhereInputObjectSchema as GasWhereInputObjectSchema } from './objects/GasWhereInput.schema';

export const GasUpdateManySchema: z.ZodType<Prisma.GasUpdateManyArgs> = z.object({ data: GasUpdateManyMutationInputObjectSchema, where: GasWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GasUpdateManyArgs>;

export const GasUpdateManyZodSchema = z.object({ data: GasUpdateManyMutationInputObjectSchema, where: GasWhereInputObjectSchema.optional() }).strict();