import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeriousnessUpdateManyMutationInputObjectSchema as SeriousnessUpdateManyMutationInputObjectSchema } from './objects/SeriousnessUpdateManyMutationInput.schema';
import { SeriousnessWhereInputObjectSchema as SeriousnessWhereInputObjectSchema } from './objects/SeriousnessWhereInput.schema';

export const SeriousnessUpdateManySchema: z.ZodType<Prisma.SeriousnessUpdateManyArgs> = z.object({ data: SeriousnessUpdateManyMutationInputObjectSchema, where: SeriousnessWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SeriousnessUpdateManyArgs>;

export const SeriousnessUpdateManyZodSchema = z.object({ data: SeriousnessUpdateManyMutationInputObjectSchema, where: SeriousnessWhereInputObjectSchema.optional() }).strict();