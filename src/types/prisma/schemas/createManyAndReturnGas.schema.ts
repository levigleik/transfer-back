import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasSelectObjectSchema as GasSelectObjectSchema } from './objects/GasSelect.schema';
import { GasCreateManyInputObjectSchema as GasCreateManyInputObjectSchema } from './objects/GasCreateManyInput.schema';

export const GasCreateManyAndReturnSchema: z.ZodType<Prisma.GasCreateManyAndReturnArgs> = z.object({ select: GasSelectObjectSchema.optional(), data: z.union([ GasCreateManyInputObjectSchema, z.array(GasCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GasCreateManyAndReturnArgs>;

export const GasCreateManyAndReturnZodSchema = z.object({ select: GasSelectObjectSchema.optional(), data: z.union([ GasCreateManyInputObjectSchema, z.array(GasCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();