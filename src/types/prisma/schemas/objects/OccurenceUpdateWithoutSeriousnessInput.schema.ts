import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ClassificationUpdateOneRequiredWithoutOccurencesNestedInputObjectSchema as ClassificationUpdateOneRequiredWithoutOccurencesNestedInputObjectSchema } from './ClassificationUpdateOneRequiredWithoutOccurencesNestedInput.schema'

const makeSchema = () => z.object({
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  classification: z.lazy(() => ClassificationUpdateOneRequiredWithoutOccurencesNestedInputObjectSchema).optional()
}).strict();
export const OccurenceUpdateWithoutSeriousnessInputObjectSchema: z.ZodType<Prisma.OccurenceUpdateWithoutSeriousnessInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceUpdateWithoutSeriousnessInput>;
export const OccurenceUpdateWithoutSeriousnessInputObjectZodSchema = makeSchema();
