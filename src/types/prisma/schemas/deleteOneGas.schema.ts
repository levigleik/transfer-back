import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasSelectObjectSchema as GasSelectObjectSchema } from './objects/GasSelect.schema';
import { GasIncludeObjectSchema as GasIncludeObjectSchema } from './objects/GasInclude.schema';
import { GasWhereUniqueInputObjectSchema as GasWhereUniqueInputObjectSchema } from './objects/GasWhereUniqueInput.schema';

export const GasDeleteOneSchema: z.ZodType<Prisma.GasDeleteArgs> = z.object({ select: GasSelectObjectSchema.optional(), include: GasIncludeObjectSchema.optional(), where: GasWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GasDeleteArgs>;

export const GasDeleteOneZodSchema = z.object({ select: GasSelectObjectSchema.optional(), include: GasIncludeObjectSchema.optional(), where: GasWhereUniqueInputObjectSchema }).strict();