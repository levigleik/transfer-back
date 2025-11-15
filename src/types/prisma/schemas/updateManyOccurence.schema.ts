import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OccurenceUpdateManyMutationInputObjectSchema as OccurenceUpdateManyMutationInputObjectSchema } from './objects/OccurenceUpdateManyMutationInput.schema';
import { OccurenceWhereInputObjectSchema as OccurenceWhereInputObjectSchema } from './objects/OccurenceWhereInput.schema';

export const OccurenceUpdateManySchema: z.ZodType<Prisma.OccurenceUpdateManyArgs> = z.object({ data: OccurenceUpdateManyMutationInputObjectSchema, where: OccurenceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OccurenceUpdateManyArgs>;

export const OccurenceUpdateManyZodSchema = z.object({ data: OccurenceUpdateManyMutationInputObjectSchema, where: OccurenceWhereInputObjectSchema.optional() }).strict();