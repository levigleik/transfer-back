import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OccurenceSelectObjectSchema as OccurenceSelectObjectSchema } from './objects/OccurenceSelect.schema';
import { OccurenceIncludeObjectSchema as OccurenceIncludeObjectSchema } from './objects/OccurenceInclude.schema';
import { OccurenceUpdateInputObjectSchema as OccurenceUpdateInputObjectSchema } from './objects/OccurenceUpdateInput.schema';
import { OccurenceUncheckedUpdateInputObjectSchema as OccurenceUncheckedUpdateInputObjectSchema } from './objects/OccurenceUncheckedUpdateInput.schema';
import { OccurenceWhereUniqueInputObjectSchema as OccurenceWhereUniqueInputObjectSchema } from './objects/OccurenceWhereUniqueInput.schema';

export const OccurenceUpdateOneSchema: z.ZodType<Prisma.OccurenceUpdateArgs> = z.object({ select: OccurenceSelectObjectSchema.optional(), include: OccurenceIncludeObjectSchema.optional(), data: z.union([OccurenceUpdateInputObjectSchema, OccurenceUncheckedUpdateInputObjectSchema]), where: OccurenceWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OccurenceUpdateArgs>;

export const OccurenceUpdateOneZodSchema = z.object({ select: OccurenceSelectObjectSchema.optional(), include: OccurenceIncludeObjectSchema.optional(), data: z.union([OccurenceUpdateInputObjectSchema, OccurenceUncheckedUpdateInputObjectSchema]), where: OccurenceWhereUniqueInputObjectSchema }).strict();