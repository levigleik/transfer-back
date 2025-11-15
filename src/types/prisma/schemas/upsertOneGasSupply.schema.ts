import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasSupplySelectObjectSchema as GasSupplySelectObjectSchema } from './objects/GasSupplySelect.schema';
import { GasSupplyIncludeObjectSchema as GasSupplyIncludeObjectSchema } from './objects/GasSupplyInclude.schema';
import { GasSupplyWhereUniqueInputObjectSchema as GasSupplyWhereUniqueInputObjectSchema } from './objects/GasSupplyWhereUniqueInput.schema';
import { GasSupplyCreateInputObjectSchema as GasSupplyCreateInputObjectSchema } from './objects/GasSupplyCreateInput.schema';
import { GasSupplyUncheckedCreateInputObjectSchema as GasSupplyUncheckedCreateInputObjectSchema } from './objects/GasSupplyUncheckedCreateInput.schema';
import { GasSupplyUpdateInputObjectSchema as GasSupplyUpdateInputObjectSchema } from './objects/GasSupplyUpdateInput.schema';
import { GasSupplyUncheckedUpdateInputObjectSchema as GasSupplyUncheckedUpdateInputObjectSchema } from './objects/GasSupplyUncheckedUpdateInput.schema';

export const GasSupplyUpsertOneSchema: z.ZodType<Prisma.GasSupplyUpsertArgs> = z.object({ select: GasSupplySelectObjectSchema.optional(), include: GasSupplyIncludeObjectSchema.optional(), where: GasSupplyWhereUniqueInputObjectSchema, create: z.union([ GasSupplyCreateInputObjectSchema, GasSupplyUncheckedCreateInputObjectSchema ]), update: z.union([ GasSupplyUpdateInputObjectSchema, GasSupplyUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.GasSupplyUpsertArgs>;

export const GasSupplyUpsertOneZodSchema = z.object({ select: GasSupplySelectObjectSchema.optional(), include: GasSupplyIncludeObjectSchema.optional(), where: GasSupplyWhereUniqueInputObjectSchema, create: z.union([ GasSupplyCreateInputObjectSchema, GasSupplyUncheckedCreateInputObjectSchema ]), update: z.union([ GasSupplyUpdateInputObjectSchema, GasSupplyUncheckedUpdateInputObjectSchema ]) }).strict();