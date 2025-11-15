import * as z from 'zod';

// prettier-ignore
export const OccurenceInputSchema = z.object({
    id: z.number().int(),
    date: z.date(),
    description: z.string(),
    seriousness: z.unknown(),
    seriousnessId: z.number().int(),
    classification: z.unknown(),
    classificationId: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type OccurenceInputType = z.infer<typeof OccurenceInputSchema>;
