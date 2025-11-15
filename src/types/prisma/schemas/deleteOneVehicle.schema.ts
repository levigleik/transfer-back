import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { VehicleSelectObjectSchema as VehicleSelectObjectSchema } from './objects/VehicleSelect.schema';
import { VehicleIncludeObjectSchema as VehicleIncludeObjectSchema } from './objects/VehicleInclude.schema';
import { VehicleWhereUniqueInputObjectSchema as VehicleWhereUniqueInputObjectSchema } from './objects/VehicleWhereUniqueInput.schema';

export const VehicleDeleteOneSchema: z.ZodType<Prisma.VehicleDeleteArgs> = z.object({ select: VehicleSelectObjectSchema.optional(), include: VehicleIncludeObjectSchema.optional(), where: VehicleWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.VehicleDeleteArgs>;

export const VehicleDeleteOneZodSchema = z.object({ select: VehicleSelectObjectSchema.optional(), include: VehicleIncludeObjectSchema.optional(), where: VehicleWhereUniqueInputObjectSchema }).strict();