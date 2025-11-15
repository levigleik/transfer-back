import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { OccurenceUpdateManyWithoutSeriousnessNestedInputObjectSchema as OccurenceUpdateManyWithoutSeriousnessNestedInputObjectSchema } from './OccurenceUpdateManyWithoutSeriousnessNestedInput.schema'

const makeSchema = () => z.object({
  level: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  occurences: z.lazy(() => OccurenceUpdateManyWithoutSeriousnessNestedInputObjectSchema).optional()
}).strict();
export const SeriousnessUpdateInputObjectSchema: z.ZodType<Prisma.SeriousnessUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.SeriousnessUpdateInput>;
export const SeriousnessUpdateInputObjectZodSchema = makeSchema();
