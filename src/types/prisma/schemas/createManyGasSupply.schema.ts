import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasSupplyCreateManyInputObjectSchema as GasSupplyCreateManyInputObjectSchema } from './objects/GasSupplyCreateManyInput.schema';

export const GasSupplyCreateManySchema: z.ZodType<Prisma.GasSupplyCreateManyArgs> = z.object({ data: z.union([ GasSupplyCreateManyInputObjectSchema, z.array(GasSupplyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GasSupplyCreateManyArgs>;

export const GasSupplyCreateManyZodSchema = z.object({ data: z.union([ GasSupplyCreateManyInputObjectSchema, z.array(GasSupplyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();