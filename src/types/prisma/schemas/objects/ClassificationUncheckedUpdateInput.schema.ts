import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { OccurenceUncheckedUpdateManyWithoutClassificationNestedInputObjectSchema as OccurenceUncheckedUpdateManyWithoutClassificationNestedInputObjectSchema } from './OccurenceUncheckedUpdateManyWithoutClassificationNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  occurences: z.lazy(() => OccurenceUncheckedUpdateManyWithoutClassificationNestedInputObjectSchema).optional()
}).strict();
export const ClassificationUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.ClassificationUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClassificationUncheckedUpdateInput>;
export const ClassificationUncheckedUpdateInputObjectZodSchema = makeSchema();
