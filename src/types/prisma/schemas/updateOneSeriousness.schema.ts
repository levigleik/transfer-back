import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeriousnessSelectObjectSchema as SeriousnessSelectObjectSchema } from './objects/SeriousnessSelect.schema';
import { SeriousnessIncludeObjectSchema as SeriousnessIncludeObjectSchema } from './objects/SeriousnessInclude.schema';
import { SeriousnessUpdateInputObjectSchema as SeriousnessUpdateInputObjectSchema } from './objects/SeriousnessUpdateInput.schema';
import { SeriousnessUncheckedUpdateInputObjectSchema as SeriousnessUncheckedUpdateInputObjectSchema } from './objects/SeriousnessUncheckedUpdateInput.schema';
import { SeriousnessWhereUniqueInputObjectSchema as SeriousnessWhereUniqueInputObjectSchema } from './objects/SeriousnessWhereUniqueInput.schema';

export const SeriousnessUpdateOneSchema: z.ZodType<Prisma.SeriousnessUpdateArgs> = z.object({ select: SeriousnessSelectObjectSchema.optional(), include: SeriousnessIncludeObjectSchema.optional(), data: z.union([SeriousnessUpdateInputObjectSchema, SeriousnessUncheckedUpdateInputObjectSchema]), where: SeriousnessWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SeriousnessUpdateArgs>;

export const SeriousnessUpdateOneZodSchema = z.object({ select: SeriousnessSelectObjectSchema.optional(), include: SeriousnessIncludeObjectSchema.optional(), data: z.union([SeriousnessUpdateInputObjectSchema, SeriousnessUncheckedUpdateInputObjectSchema]), where: SeriousnessWhereUniqueInputObjectSchema }).strict();