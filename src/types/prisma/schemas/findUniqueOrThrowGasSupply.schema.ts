import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { GasSupplySelectObjectSchema as GasSupplySelectObjectSchema } from './objects/GasSupplySelect.schema';
import { GasSupplyIncludeObjectSchema as GasSupplyIncludeObjectSchema } from './objects/GasSupplyInclude.schema';
import { GasSupplyWhereUniqueInputObjectSchema as GasSupplyWhereUniqueInputObjectSchema } from './objects/GasSupplyWhereUniqueInput.schema';

export const GasSupplyFindUniqueOrThrowSchema: z.ZodType<Prisma.GasSupplyFindUniqueOrThrowArgs> = z.object({ select: GasSupplySelectObjectSchema.optional(), include: GasSupplyIncludeObjectSchema.optional(), where: GasSupplyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GasSupplyFindUniqueOrThrowArgs>;

export const GasSupplyFindUniqueOrThrowZodSchema = z.object({ select: GasSupplySelectObjectSchema.optional(), include: GasSupplyIncludeObjectSchema.optional(), where: GasSupplyWhereUniqueInputObjectSchema }).strict();