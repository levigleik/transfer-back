import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeriousnessSelectObjectSchema as SeriousnessSelectObjectSchema } from './objects/SeriousnessSelect.schema';
import { SeriousnessIncludeObjectSchema as SeriousnessIncludeObjectSchema } from './objects/SeriousnessInclude.schema';
import { SeriousnessCreateInputObjectSchema as SeriousnessCreateInputObjectSchema } from './objects/SeriousnessCreateInput.schema';
import { SeriousnessUncheckedCreateInputObjectSchema as SeriousnessUncheckedCreateInputObjectSchema } from './objects/SeriousnessUncheckedCreateInput.schema';

export const SeriousnessCreateOneSchema: z.ZodType<Prisma.SeriousnessCreateArgs> = z.object({ select: SeriousnessSelectObjectSchema.optional(), include: SeriousnessIncludeObjectSchema.optional(), data: z.union([SeriousnessCreateInputObjectSchema, SeriousnessUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SeriousnessCreateArgs>;

export const SeriousnessCreateOneZodSchema = z.object({ select: SeriousnessSelectObjectSchema.optional(), include: SeriousnessIncludeObjectSchema.optional(), data: z.union([SeriousnessCreateInputObjectSchema, SeriousnessUncheckedCreateInputObjectSchema]) }).strict();