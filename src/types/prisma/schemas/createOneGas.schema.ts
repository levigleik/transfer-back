import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasSelectObjectSchema as GasSelectObjectSchema } from './objects/GasSelect.schema';
import { GasIncludeObjectSchema as GasIncludeObjectSchema } from './objects/GasInclude.schema';
import { GasCreateInputObjectSchema as GasCreateInputObjectSchema } from './objects/GasCreateInput.schema';
import { GasUncheckedCreateInputObjectSchema as GasUncheckedCreateInputObjectSchema } from './objects/GasUncheckedCreateInput.schema';

export const GasCreateOneSchema: z.ZodType<Prisma.GasCreateArgs> = z.object({ select: GasSelectObjectSchema.optional(), include: GasIncludeObjectSchema.optional(), data: z.union([GasCreateInputObjectSchema, GasUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.GasCreateArgs>;

export const GasCreateOneZodSchema = z.object({ select: GasSelectObjectSchema.optional(), include: GasIncludeObjectSchema.optional(), data: z.union([GasCreateInputObjectSchema, GasUncheckedCreateInputObjectSchema]) }).strict();