import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PlateTypeSchema } from '../enums/PlateType.schema'

const makeSchema = () => z.object({
  set: PlateTypeSchema.optional()
}).strict();
export const EnumPlateTypeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumPlateTypeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumPlateTypeFieldUpdateOperationsInput>;
export const EnumPlateTypeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
