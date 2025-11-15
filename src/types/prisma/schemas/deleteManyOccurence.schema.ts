import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OccurenceWhereInputObjectSchema as OccurenceWhereInputObjectSchema } from './objects/OccurenceWhereInput.schema';

export const OccurenceDeleteManySchema: z.ZodType<Prisma.OccurenceDeleteManyArgs> = z.object({ where: OccurenceWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.OccurenceDeleteManyArgs>;

export const OccurenceDeleteManyZodSchema = z.object({ where: OccurenceWhereInputObjectSchema.optional() }).strict();