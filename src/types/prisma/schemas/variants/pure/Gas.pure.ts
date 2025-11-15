import * as z from 'zod';

// prettier-ignore
export const GasModelSchema = z.object({
    id: z.number().int(),
    type: z.string(),
    vehicle: z.array(z.unknown()),
    gasSupplies: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type GasPureType = z.infer<typeof GasModelSchema>;
