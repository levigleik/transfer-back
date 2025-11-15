import * as z from 'zod';

// prettier-ignore
export const CategoryResultSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    vehicles: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CategoryResultType = z.infer<typeof CategoryResultSchema>;
