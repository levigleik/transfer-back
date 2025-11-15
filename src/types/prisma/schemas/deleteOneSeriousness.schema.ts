import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeriousnessSelectObjectSchema as SeriousnessSelectObjectSchema } from './objects/SeriousnessSelect.schema';
import { SeriousnessIncludeObjectSchema as SeriousnessIncludeObjectSchema } from './objects/SeriousnessInclude.schema';
import { SeriousnessWhereUniqueInputObjectSchema as SeriousnessWhereUniqueInputObjectSchema } from './objects/SeriousnessWhereUniqueInput.schema';

export const SeriousnessDeleteOneSchema: z.ZodType<Prisma.SeriousnessDeleteArgs> = z.object({ select: SeriousnessSelectObjectSchema.optional(), include: SeriousnessIncludeObjectSchema.optional(), where: SeriousnessWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SeriousnessDeleteArgs>;

export const SeriousnessDeleteOneZodSchema = z.object({ select: SeriousnessSelectObjectSchema.optional(), include: SeriousnessIncludeObjectSchema.optional(), where: SeriousnessWhereUniqueInputObjectSchema }).strict();