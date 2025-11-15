import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasSelectObjectSchema as GasSelectObjectSchema } from './objects/GasSelect.schema';
import { GasIncludeObjectSchema as GasIncludeObjectSchema } from './objects/GasInclude.schema';
import { GasUpdateInputObjectSchema as GasUpdateInputObjectSchema } from './objects/GasUpdateInput.schema';
import { GasUncheckedUpdateInputObjectSchema as GasUncheckedUpdateInputObjectSchema } from './objects/GasUncheckedUpdateInput.schema';
import { GasWhereUniqueInputObjectSchema as GasWhereUniqueInputObjectSchema } from './objects/GasWhereUniqueInput.schema';

export const GasUpdateOneSchema: z.ZodType<Prisma.GasUpdateArgs> = z.object({ select: GasSelectObjectSchema.optional(), include: GasIncludeObjectSchema.optional(), data: z.union([GasUpdateInputObjectSchema, GasUncheckedUpdateInputObjectSchema]), where: GasWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GasUpdateArgs>;

export const GasUpdateOneZodSchema = z.object({ select: GasSelectObjectSchema.optional(), include: GasIncludeObjectSchema.optional(), data: z.union([GasUpdateInputObjectSchema, GasUncheckedUpdateInputObjectSchema]), where: GasWhereUniqueInputObjectSchema }).strict();