import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OccurenceSelectObjectSchema as OccurenceSelectObjectSchema } from './objects/OccurenceSelect.schema';
import { OccurenceIncludeObjectSchema as OccurenceIncludeObjectSchema } from './objects/OccurenceInclude.schema';
import { OccurenceWhereUniqueInputObjectSchema as OccurenceWhereUniqueInputObjectSchema } from './objects/OccurenceWhereUniqueInput.schema';

export const OccurenceFindUniqueSchema: z.ZodType<Prisma.OccurenceFindUniqueArgs> = z.object({ select: OccurenceSelectObjectSchema.optional(), include: OccurenceIncludeObjectSchema.optional(), where: OccurenceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OccurenceFindUniqueArgs>;

export const OccurenceFindUniqueZodSchema = z.object({ select: OccurenceSelectObjectSchema.optional(), include: OccurenceIncludeObjectSchema.optional(), where: OccurenceWhereUniqueInputObjectSchema }).strict();