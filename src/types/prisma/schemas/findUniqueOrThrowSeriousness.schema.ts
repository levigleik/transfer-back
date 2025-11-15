import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SeriousnessSelectObjectSchema as SeriousnessSelectObjectSchema } from './objects/SeriousnessSelect.schema';
import { SeriousnessIncludeObjectSchema as SeriousnessIncludeObjectSchema } from './objects/SeriousnessInclude.schema';
import { SeriousnessWhereUniqueInputObjectSchema as SeriousnessWhereUniqueInputObjectSchema } from './objects/SeriousnessWhereUniqueInput.schema';

export const SeriousnessFindUniqueOrThrowSchema: z.ZodType<Prisma.SeriousnessFindUniqueOrThrowArgs> = z.object({ select: SeriousnessSelectObjectSchema.optional(), include: SeriousnessIncludeObjectSchema.optional(), where: SeriousnessWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SeriousnessFindUniqueOrThrowArgs>;

export const SeriousnessFindUniqueOrThrowZodSchema = z.object({ select: SeriousnessSelectObjectSchema.optional(), include: SeriousnessIncludeObjectSchema.optional(), where: SeriousnessWhereUniqueInputObjectSchema }).strict();