import * as z from 'zod';

// prettier-ignore
export const ClassificationInputSchema = z.object({
    id: z.number().int(),
    description: z.string(),
    occurences: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ClassificationInputType = z.infer<typeof ClassificationInputSchema>;
