import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeriousnessSelectObjectSchema as SeriousnessSelectObjectSchema } from './objects/SeriousnessSelect.schema';
import { SeriousnessIncludeObjectSchema as SeriousnessIncludeObjectSchema } from './objects/SeriousnessInclude.schema';
import { SeriousnessWhereUniqueInputObjectSchema as SeriousnessWhereUniqueInputObjectSchema } from './objects/SeriousnessWhereUniqueInput.schema';
import { SeriousnessCreateInputObjectSchema as SeriousnessCreateInputObjectSchema } from './objects/SeriousnessCreateInput.schema';
import { SeriousnessUncheckedCreateInputObjectSchema as SeriousnessUncheckedCreateInputObjectSchema } from './objects/SeriousnessUncheckedCreateInput.schema';
import { SeriousnessUpdateInputObjectSchema as SeriousnessUpdateInputObjectSchema } from './objects/SeriousnessUpdateInput.schema';
import { SeriousnessUncheckedUpdateInputObjectSchema as SeriousnessUncheckedUpdateInputObjectSchema } from './objects/SeriousnessUncheckedUpdateInput.schema';

export const SeriousnessUpsertOneSchema: z.ZodType<Prisma.SeriousnessUpsertArgs> = z.object({ select: SeriousnessSelectObjectSchema.optional(), include: SeriousnessIncludeObjectSchema.optional(), where: SeriousnessWhereUniqueInputObjectSchema, create: z.union([ SeriousnessCreateInputObjectSchema, SeriousnessUncheckedCreateInputObjectSchema ]), update: z.union([ SeriousnessUpdateInputObjectSchema, SeriousnessUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SeriousnessUpsertArgs>;

export const SeriousnessUpsertOneZodSchema = z.object({ select: SeriousnessSelectObjectSchema.optional(), include: SeriousnessIncludeObjectSchema.optional(), where: SeriousnessWhereUniqueInputObjectSchema, create: z.union([ SeriousnessCreateInputObjectSchema, SeriousnessUncheckedCreateInputObjectSchema ]), update: z.union([ SeriousnessUpdateInputObjectSchema, SeriousnessUncheckedUpdateInputObjectSchema ]) }).strict();