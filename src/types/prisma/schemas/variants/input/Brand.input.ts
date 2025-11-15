import * as z from 'zod';

// prettier-ignore
export const BrandInputSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    vehicles: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type BrandInputType = z.infer<typeof BrandInputSchema>;
