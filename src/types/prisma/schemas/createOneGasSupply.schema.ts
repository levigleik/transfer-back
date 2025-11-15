import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasSupplySelectObjectSchema as GasSupplySelectObjectSchema } from './objects/GasSupplySelect.schema';
import { GasSupplyIncludeObjectSchema as GasSupplyIncludeObjectSchema } from './objects/GasSupplyInclude.schema';
import { GasSupplyCreateInputObjectSchema as GasSupplyCreateInputObjectSchema } from './objects/GasSupplyCreateInput.schema';
import { GasSupplyUncheckedCreateInputObjectSchema as GasSupplyUncheckedCreateInputObjectSchema } from './objects/GasSupplyUncheckedCreateInput.schema';

export const GasSupplyCreateOneSchema: z.ZodType<Prisma.GasSupplyCreateArgs> = z.object({ select: GasSupplySelectObjectSchema.optional(), include: GasSupplyIncludeObjectSchema.optional(), data: z.union([GasSupplyCreateInputObjectSchema, GasSupplyUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.GasSupplyCreateArgs>;

export const GasSupplyCreateOneZodSchema = z.object({ select: GasSupplySelectObjectSchema.optional(), include: GasSupplyIncludeObjectSchema.optional(), data: z.union([GasSupplyCreateInputObjectSchema, GasSupplyUncheckedCreateInputObjectSchema]) }).strict();