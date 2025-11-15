import * as z from 'zod';

// prettier-ignore
export const GasStationModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type GasStationPureType = z.infer<typeof GasStationModelSchema>;
