import * as z from 'zod';

// prettier-ignore
export const GasSupplyResultSchema = z.object({
    id: z.number().int(),
    kmToReview: z.number().int(),
    kmToStop: z.number().int(),
    quantity: z.number(),
    supplyAt: z.date(),
    totalPrice: z.number(),
    gas: z.unknown(),
    gasId: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type GasSupplyResultType = z.infer<typeof GasSupplyResultSchema>;
