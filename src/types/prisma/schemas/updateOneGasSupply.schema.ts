import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasSupplySelectObjectSchema as GasSupplySelectObjectSchema } from './objects/GasSupplySelect.schema';
import { GasSupplyIncludeObjectSchema as GasSupplyIncludeObjectSchema } from './objects/GasSupplyInclude.schema';
import { GasSupplyUpdateInputObjectSchema as GasSupplyUpdateInputObjectSchema } from './objects/GasSupplyUpdateInput.schema';
import { GasSupplyUncheckedUpdateInputObjectSchema as GasSupplyUncheckedUpdateInputObjectSchema } from './objects/GasSupplyUncheckedUpdateInput.schema';
import { GasSupplyWhereUniqueInputObjectSchema as GasSupplyWhereUniqueInputObjectSchema } from './objects/GasSupplyWhereUniqueInput.schema';

export const GasSupplyUpdateOneSchema: z.ZodType<Prisma.GasSupplyUpdateArgs> = z.object({ select: GasSupplySelectObjectSchema.optional(), include: GasSupplyIncludeObjectSchema.optional(), data: z.union([GasSupplyUpdateInputObjectSchema, GasSupplyUncheckedUpdateInputObjectSchema]), where: GasSupplyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GasSupplyUpdateArgs>;

export const GasSupplyUpdateOneZodSchema = z.object({ select: GasSupplySelectObjectSchema.optional(), include: GasSupplyIncludeObjectSchema.optional(), data: z.union([GasSupplyUpdateInputObjectSchema, GasSupplyUncheckedUpdateInputObjectSchema]), where: GasSupplyWhereUniqueInputObjectSchema }).strict();