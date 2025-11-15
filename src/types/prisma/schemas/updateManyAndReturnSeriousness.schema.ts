import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeriousnessSelectObjectSchema as SeriousnessSelectObjectSchema } from './objects/SeriousnessSelect.schema';
import { SeriousnessUpdateManyMutationInputObjectSchema as SeriousnessUpdateManyMutationInputObjectSchema } from './objects/SeriousnessUpdateManyMutationInput.schema';
import { SeriousnessWhereInputObjectSchema as SeriousnessWhereInputObjectSchema } from './objects/SeriousnessWhereInput.schema';

export const SeriousnessUpdateManyAndReturnSchema: z.ZodType<Prisma.SeriousnessUpdateManyAndReturnArgs> = z.object({ select: SeriousnessSelectObjectSchema.optional(), data: SeriousnessUpdateManyMutationInputObjectSchema, where: SeriousnessWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SeriousnessUpdateManyAndReturnArgs>;

export const SeriousnessUpdateManyAndReturnZodSchema = z.object({ select: SeriousnessSelectObjectSchema.optional(), data: SeriousnessUpdateManyMutationInputObjectSchema, where: SeriousnessWhereInputObjectSchema.optional() }).strict();