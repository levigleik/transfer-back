import * as z from 'zod';

// prettier-ignore
export const GasInputSchema = z.object({
    id: z.number().int(),
    type: z.string(),
    vehicle: z.array(z.unknown()),
    gasSupplies: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type GasInputType = z.infer<typeof GasInputSchema>;
