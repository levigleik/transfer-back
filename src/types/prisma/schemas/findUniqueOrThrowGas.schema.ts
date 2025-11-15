import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasSelectObjectSchema as GasSelectObjectSchema } from './objects/GasSelect.schema';
import { GasIncludeObjectSchema as GasIncludeObjectSchema } from './objects/GasInclude.schema';
import { GasWhereUniqueInputObjectSchema as GasWhereUniqueInputObjectSchema } from './objects/GasWhereUniqueInput.schema';

export const GasFindUniqueOrThrowSchema: z.ZodType<Prisma.GasFindUniqueOrThrowArgs> = z.object({ select: GasSelectObjectSchema.optional(), include: GasIncludeObjectSchema.optional(), where: GasWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GasFindUniqueOrThrowArgs>;

export const GasFindUniqueOrThrowZodSchema = z.object({ select: GasSelectObjectSchema.optional(), include: GasIncludeObjectSchema.optional(), where: GasWhereUniqueInputObjectSchema }).strict();