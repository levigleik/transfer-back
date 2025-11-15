import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasSelectObjectSchema as GasSelectObjectSchema } from './objects/GasSelect.schema';
import { GasIncludeObjectSchema as GasIncludeObjectSchema } from './objects/GasInclude.schema';
import { GasWhereUniqueInputObjectSchema as GasWhereUniqueInputObjectSchema } from './objects/GasWhereUniqueInput.schema';

export const GasFindUniqueSchema: z.ZodType<Prisma.GasFindUniqueArgs> = z.object({ select: GasSelectObjectSchema.optional(), include: GasIncludeObjectSchema.optional(), where: GasWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GasFindUniqueArgs>;

export const GasFindUniqueZodSchema = z.object({ select: GasSelectObjectSchema.optional(), include: GasIncludeObjectSchema.optional(), where: GasWhereUniqueInputObjectSchema }).strict();