import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasStationCreateManyInputObjectSchema as GasStationCreateManyInputObjectSchema } from './objects/GasStationCreateManyInput.schema';

export const GasStationCreateManySchema: z.ZodType<Prisma.GasStationCreateManyArgs> = z.object({ data: z.union([ GasStationCreateManyInputObjectSchema, z.array(GasStationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GasStationCreateManyArgs>;

export const GasStationCreateManyZodSchema = z.object({ data: z.union([ GasStationCreateManyInputObjectSchema, z.array(GasStationCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();