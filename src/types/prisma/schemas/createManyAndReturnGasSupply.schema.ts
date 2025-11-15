import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasSupplySelectObjectSchema as GasSupplySelectObjectSchema } from './objects/GasSupplySelect.schema';
import { GasSupplyCreateManyInputObjectSchema as GasSupplyCreateManyInputObjectSchema } from './objects/GasSupplyCreateManyInput.schema';

export const GasSupplyCreateManyAndReturnSchema: z.ZodType<Prisma.GasSupplyCreateManyAndReturnArgs> = z.object({ select: GasSupplySelectObjectSchema.optional(), data: z.union([ GasSupplyCreateManyInputObjectSchema, z.array(GasSupplyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GasSupplyCreateManyAndReturnArgs>;

export const GasSupplyCreateManyAndReturnZodSchema = z.object({ select: GasSupplySelectObjectSchema.optional(), data: z.union([ GasSupplyCreateManyInputObjectSchema, z.array(GasSupplyCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();