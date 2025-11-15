import * as z from 'zod';

// prettier-ignore
export const ClassificationModelSchema = z.object({
    id: z.number().int(),
    description: z.string(),
    occurences: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type ClassificationPureType = z.infer<typeof ClassificationModelSchema>;
