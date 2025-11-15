import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasSelectObjectSchema as GasSelectObjectSchema } from './objects/GasSelect.schema';
import { GasIncludeObjectSchema as GasIncludeObjectSchema } from './objects/GasInclude.schema';
import { GasWhereUniqueInputObjectSchema as GasWhereUniqueInputObjectSchema } from './objects/GasWhereUniqueInput.schema';
import { GasCreateInputObjectSchema as GasCreateInputObjectSchema } from './objects/GasCreateInput.schema';
import { GasUncheckedCreateInputObjectSchema as GasUncheckedCreateInputObjectSchema } from './objects/GasUncheckedCreateInput.schema';
import { GasUpdateInputObjectSchema as GasUpdateInputObjectSchema } from './objects/GasUpdateInput.schema';
import { GasUncheckedUpdateInputObjectSchema as GasUncheckedUpdateInputObjectSchema } from './objects/GasUncheckedUpdateInput.schema';

export const GasUpsertOneSchema: z.ZodType<Prisma.GasUpsertArgs> = z.object({ select: GasSelectObjectSchema.optional(), include: GasIncludeObjectSchema.optional(), where: GasWhereUniqueInputObjectSchema, create: z.union([ GasCreateInputObjectSchema, GasUncheckedCreateInputObjectSchema ]), update: z.union([ GasUpdateInputObjectSchema, GasUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.GasUpsertArgs>;

export const GasUpsertOneZodSchema = z.object({ select: GasSelectObjectSchema.optional(), include: GasIncludeObjectSchema.optional(), where: GasWhereUniqueInputObjectSchema, create: z.union([ GasCreateInputObjectSchema, GasUncheckedCreateInputObjectSchema ]), update: z.union([ GasUpdateInputObjectSchema, GasUncheckedUpdateInputObjectSchema ]) }).strict();