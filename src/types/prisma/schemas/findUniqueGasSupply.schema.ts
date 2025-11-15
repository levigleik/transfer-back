import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasSupplySelectObjectSchema as GasSupplySelectObjectSchema } from './objects/GasSupplySelect.schema';
import { GasSupplyIncludeObjectSchema as GasSupplyIncludeObjectSchema } from './objects/GasSupplyInclude.schema';
import { GasSupplyWhereUniqueInputObjectSchema as GasSupplyWhereUniqueInputObjectSchema } from './objects/GasSupplyWhereUniqueInput.schema';

export const GasSupplyFindUniqueSchema: z.ZodType<Prisma.GasSupplyFindUniqueArgs> = z.object({ select: GasSupplySelectObjectSchema.optional(), include: GasSupplyIncludeObjectSchema.optional(), where: GasSupplyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GasSupplyFindUniqueArgs>;

export const GasSupplyFindUniqueZodSchema = z.object({ select: GasSupplySelectObjectSchema.optional(), include: GasSupplyIncludeObjectSchema.optional(), where: GasSupplyWhereUniqueInputObjectSchema }).strict();