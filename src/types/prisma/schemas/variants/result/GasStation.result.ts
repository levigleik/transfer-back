import * as z from 'zod';

// prettier-ignore
export const GasStationResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type GasStationResultType = z.infer<typeof GasStationResultSchema>;
