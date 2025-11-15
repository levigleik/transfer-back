import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { SeriousnessUpdateOneRequiredWithoutOccurencesNestedInputObjectSchema as SeriousnessUpdateOneRequiredWithoutOccurencesNestedInputObjectSchema } from './SeriousnessUpdateOneRequiredWithoutOccurencesNestedInput.schema';
import { ClassificationUpdateOneRequiredWithoutOccurencesNestedInputObjectSchema as ClassificationUpdateOneRequiredWithoutOccurencesNestedInputObjectSchema } from './ClassificationUpdateOneRequiredWithoutOccurencesNestedInput.schema'

const makeSchema = () => z.object({
  date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  seriousness: z.lazy(() => SeriousnessUpdateOneRequiredWithoutOccurencesNestedInputObjectSchema).optional(),
  classification: z.lazy(() => ClassificationUpdateOneRequiredWithoutOccurencesNestedInputObjectSchema).optional()
}).strict();
export const OccurenceUpdateInputObjectSchema: z.ZodType<Prisma.OccurenceUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.OccurenceUpdateInput>;
export const OccurenceUpdateInputObjectZodSchema = makeSchema();
