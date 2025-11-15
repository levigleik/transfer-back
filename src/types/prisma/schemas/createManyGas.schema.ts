import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasCreateManyInputObjectSchema as GasCreateManyInputObjectSchema } from './objects/GasCreateManyInput.schema';

export const GasCreateManySchema: z.ZodType<Prisma.GasCreateManyArgs> = z.object({ data: z.union([ GasCreateManyInputObjectSchema, z.array(GasCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GasCreateManyArgs>;

export const GasCreateManyZodSchema = z.object({ data: z.union([ GasCreateManyInputObjectSchema, z.array(GasCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();