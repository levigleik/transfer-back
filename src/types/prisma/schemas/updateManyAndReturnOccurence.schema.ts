import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OccurenceSelectObjectSchema as OccurenceSelectObjectSchema } from './objects/OccurenceSelect.schema';
import { OccurenceUpdateManyMutationInputObjectSchema as OccurenceUpdateManyMutationInputObjectSchema } from './objects/OccurenceUpdateManyMutationInput.schema';
import { OccurenceWhereInputObjectSchema as OccurenceWhereInputObjectSchema } from './objects/OccurenceWhereInput.schema';

export const OccurenceUpdateManyAndReturnSchema: z.ZodType<Prisma.OccurenceUpdateManyAndReturnArgs> = z.object({ select: OccurenceSelectObjectSchema.optional(), data: OccurenceUpdateManyMutationInputObjectSchema, where: OccurenceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OccurenceUpdateManyAndReturnArgs>;

export const OccurenceUpdateManyAndReturnZodSchema = z.object({ select: OccurenceSelectObjectSchema.optional(), data: OccurenceUpdateManyMutationInputObjectSchema, where: OccurenceWhereInputObjectSchema.optional() }).strict();