import * as z from 'zod';

// prettier-ignore
export const ClassificationResultSchema = z.object({
    id: z.number().int(),
    description: z.string(),
    occurences: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ClassificationResultType = z.infer<typeof ClassificationResultSchema>;
