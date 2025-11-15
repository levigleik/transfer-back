import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { GasArgsObjectSchema as GasArgsObjectSchema } from './GasArgs.schema'

const makeSchema = () => z.object({
  gas: z.union([z.boolean(), z.lazy(() => GasArgsObjectSchema)]).optional()
}).strict();
export const GasSupplyIncludeObjectSchema: z.ZodType<Prisma.GasSupplyInclude> = makeSchema() as unknown as z.ZodType<Prisma.GasSupplyInclude>;
export const GasSupplyIncludeObjectZodSchema = makeSchema();
