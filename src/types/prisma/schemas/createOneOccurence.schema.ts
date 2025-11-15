import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OccurenceSelectObjectSchema as OccurenceSelectObjectSchema } from './objects/OccurenceSelect.schema';
import { OccurenceIncludeObjectSchema as OccurenceIncludeObjectSchema } from './objects/OccurenceInclude.schema';
import { OccurenceCreateInputObjectSchema as OccurenceCreateInputObjectSchema } from './objects/OccurenceCreateInput.schema';
import { OccurenceUncheckedCreateInputObjectSchema as OccurenceUncheckedCreateInputObjectSchema } from './objects/OccurenceUncheckedCreateInput.schema';

export const OccurenceCreateOneSchema: z.ZodType<Prisma.OccurenceCreateArgs> = z.object({ select: OccurenceSelectObjectSchema.optional(), include: OccurenceIncludeObjectSchema.optional(), data: z.union([OccurenceCreateInputObjectSchema, OccurenceUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.OccurenceCreateArgs>;

export const OccurenceCreateOneZodSchema = z.object({ select: OccurenceSelectObjectSchema.optional(), include: OccurenceIncludeObjectSchema.optional(), data: z.union([OccurenceCreateInputObjectSchema, OccurenceUncheckedCreateInputObjectSchema]) }).strict();