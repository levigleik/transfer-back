import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasStationSelectObjectSchema as GasStationSelectObjectSchema } from './objects/GasStationSelect.schema';
import { GasStationCreateManyInputObjectSchema as GasStationCreateManyInputObjectSchema } from './objects/GasStationCreateManyInput.schema';

export const GasStationCreateManyAndReturnSchema: z.ZodType<Prisma.GasStationCreateManyAndReturnArgs> = z.object({ select: GasStationSelectObjectSchema.optional(), data: z.union([ GasStationCreateManyInputObjectSchema, z.array(GasStationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GasStationCreateManyAndReturnArgs>;

export const GasStationCreateManyAndReturnZodSchema = z.object({ select: GasStationSelectObjectSchema.optional(), data: z.union([ GasStationCreateManyInputObjectSchema, z.array(GasStationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();