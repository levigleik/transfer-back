import * as z from 'zod';

// prettier-ignore
export const BrandModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    vehicles: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type BrandPureType = z.infer<typeof BrandModelSchema>;
