import * as z from 'zod';

// prettier-ignore
export const BrandResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    vehicles: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type BrandResultType = z.infer<typeof BrandResultSchema>;
