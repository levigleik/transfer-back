import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeriousnessCreateManyInputObjectSchema as SeriousnessCreateManyInputObjectSchema } from './objects/SeriousnessCreateManyInput.schema';

export const SeriousnessCreateManySchema: z.ZodType<Prisma.SeriousnessCreateManyArgs> = z.object({ data: z.union([ SeriousnessCreateManyInputObjectSchema, z.array(SeriousnessCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SeriousnessCreateManyArgs>;

export const SeriousnessCreateManyZodSchema = z.object({ data: z.union([ SeriousnessCreateManyInputObjectSchema, z.array(SeriousnessCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();