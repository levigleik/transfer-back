import * as z from 'zod';

// prettier-ignore
export const GasResultSchema = z.object({
    id: z.number().int(),
    type: z.string(),
    vehicle: z.array(z.unknown()),
    gasSupplies: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type GasResultType = z.infer<typeof GasResultSchema>;
