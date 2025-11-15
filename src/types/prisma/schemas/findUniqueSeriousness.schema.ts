import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeriousnessSelectObjectSchema as SeriousnessSelectObjectSchema } from './objects/SeriousnessSelect.schema';
import { SeriousnessIncludeObjectSchema as SeriousnessIncludeObjectSchema } from './objects/SeriousnessInclude.schema';
import { SeriousnessWhereUniqueInputObjectSchema as SeriousnessWhereUniqueInputObjectSchema } from './objects/SeriousnessWhereUniqueInput.schema';

export const SeriousnessFindUniqueSchema: z.ZodType<Prisma.SeriousnessFindUniqueArgs> = z.object({ select: SeriousnessSelectObjectSchema.optional(), include: SeriousnessIncludeObjectSchema.optional(), where: SeriousnessWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SeriousnessFindUniqueArgs>;

export const SeriousnessFindUniqueZodSchema = z.object({ select: SeriousnessSelectObjectSchema.optional(), include: SeriousnessIncludeObjectSchema.optional(), where: SeriousnessWhereUniqueInputObjectSchema }).strict();