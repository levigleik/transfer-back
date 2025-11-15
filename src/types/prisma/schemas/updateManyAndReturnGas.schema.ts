import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasSelectObjectSchema as GasSelectObjectSchema } from './objects/GasSelect.schema';
import { GasUpdateManyMutationInputObjectSchema as GasUpdateManyMutationInputObjectSchema } from './objects/GasUpdateManyMutationInput.schema';
import { GasWhereInputObjectSchema as GasWhereInputObjectSchema } from './objects/GasWhereInput.schema';

export const GasUpdateManyAndReturnSchema: z.ZodType<Prisma.GasUpdateManyAndReturnArgs> = z.object({ select: GasSelectObjectSchema.optional(), data: GasUpdateManyMutationInputObjectSchema, where: GasWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GasUpdateManyAndReturnArgs>;

export const GasUpdateManyAndReturnZodSchema = z.object({ select: GasSelectObjectSchema.optional(), data: GasUpdateManyMutationInputObjectSchema, where: GasWhereInputObjectSchema.optional() }).strict();