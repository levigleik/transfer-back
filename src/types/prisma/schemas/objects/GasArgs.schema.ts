import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasSelectObjectSchema as GasSelectObjectSchema } from './GasSelect.schema';
import { GasIncludeObjectSchema as GasIncludeObjectSchema } from './GasInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => GasSelectObjectSchema).optional(),
  include: z.lazy(() => GasIncludeObjectSchema).optional()
}).strict();
export const GasArgsObjectSchema = makeSchema();
export const GasArgsObjectZodSchema = makeSchema();
