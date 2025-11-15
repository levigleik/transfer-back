import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeriousnessSelectObjectSchema as SeriousnessSelectObjectSchema } from './objects/SeriousnessSelect.schema';
import { SeriousnessCreateManyInputObjectSchema as SeriousnessCreateManyInputObjectSchema } from './objects/SeriousnessCreateManyInput.schema';

export const SeriousnessCreateManyAndReturnSchema: z.ZodType<Prisma.SeriousnessCreateManyAndReturnArgs> = z.object({ select: SeriousnessSelectObjectSchema.optional(), data: z.union([ SeriousnessCreateManyInputObjectSchema, z.array(SeriousnessCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SeriousnessCreateManyAndReturnArgs>;

export const SeriousnessCreateManyAndReturnZodSchema = z.object({ select: SeriousnessSelectObjectSchema.optional(), data: z.union([ SeriousnessCreateManyInputObjectSchema, z.array(SeriousnessCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();