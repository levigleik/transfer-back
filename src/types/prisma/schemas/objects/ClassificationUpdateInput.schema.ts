import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { OccurenceUpdateManyWithoutClassificationNestedInputObjectSchema as OccurenceUpdateManyWithoutClassificationNestedInputObjectSchema } from './OccurenceUpdateManyWithoutClassificationNestedInput.schema'

const makeSchema = () => z.object({
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  occurences: z.lazy(() => OccurenceUpdateManyWithoutClassificationNestedInputObjectSchema).optional()
}).strict();
export const ClassificationUpdateInputObjectSchema: z.ZodType<Prisma.ClassificationUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationUpdateInput>;
export const ClassificationUpdateInputObjectZodSchema = makeSchema();
