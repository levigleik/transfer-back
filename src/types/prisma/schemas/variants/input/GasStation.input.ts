import * as z from 'zod';

// prettier-ignore
export const GasStationInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type GasStationInputType = z.infer<typeof GasStationInputSchema>;
