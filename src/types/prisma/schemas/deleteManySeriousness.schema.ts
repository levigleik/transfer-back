import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeriousnessWhereInputObjectSchema as SeriousnessWhereInputObjectSchema } from './objects/SeriousnessWhereInput.schema';

export const SeriousnessDeleteManySchema: z.ZodType<Prisma.SeriousnessDeleteManyArgs> = z.object({ where: SeriousnessWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SeriousnessDeleteManyArgs>;

export const SeriousnessDeleteManyZodSchema = z.object({ where: SeriousnessWhereInputObjectSchema.optional() }).strict();