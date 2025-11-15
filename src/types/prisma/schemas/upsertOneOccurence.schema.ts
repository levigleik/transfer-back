import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OccurenceSelectObjectSchema as OccurenceSelectObjectSchema } from './objects/OccurenceSelect.schema';
import { OccurenceIncludeObjectSchema as OccurenceIncludeObjectSchema } from './objects/OccurenceInclude.schema';
import { OccurenceWhereUniqueInputObjectSchema as OccurenceWhereUniqueInputObjectSchema } from './objects/OccurenceWhereUniqueInput.schema';
import { OccurenceCreateInputObjectSchema as OccurenceCreateInputObjectSchema } from './objects/OccurenceCreateInput.schema';
import { OccurenceUncheckedCreateInputObjectSchema as OccurenceUncheckedCreateInputObjectSchema } from './objects/OccurenceUncheckedCreateInput.schema';
import { OccurenceUpdateInputObjectSchema as OccurenceUpdateInputObjectSchema } from './objects/OccurenceUpdateInput.schema';
import { OccurenceUncheckedUpdateInputObjectSchema as OccurenceUncheckedUpdateInputObjectSchema } from './objects/OccurenceUncheckedUpdateInput.schema';

export const OccurenceUpsertOneSchema: z.ZodType<Prisma.OccurenceUpsertArgs> = z.object({ select: OccurenceSelectObjectSchema.optional(), include: OccurenceIncludeObjectSchema.optional(), where: OccurenceWhereUniqueInputObjectSchema, create: z.union([ OccurenceCreateInputObjectSchema, OccurenceUncheckedCreateInputObjectSchema ]), update: z.union([ OccurenceUpdateInputObjectSchema, OccurenceUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.OccurenceUpsertArgs>;

export const OccurenceUpsertOneZodSchema = z.object({ select: OccurenceSelectObjectSchema.optional(), include: OccurenceIncludeObjectSchema.optional(), where: OccurenceWhereUniqueInputObjectSchema, create: z.union([ OccurenceCreateInputObjectSchema, OccurenceUncheckedCreateInputObjectSchema ]), update: z.union([ OccurenceUpdateInputObjectSchema, OccurenceUncheckedUpdateInputObjectSchema ]) }).strict();