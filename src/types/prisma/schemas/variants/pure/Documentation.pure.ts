import * as z from 'zod';

// prettier-ignore
export const DocumentationModelSchema = z.object({
    id: z.number().int(),
    type: z.string(),
    expiryAt: z.date(),
    antecipateRenewal: z.boolean(),
    days: z.array(z.string()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type DocumentationPureType = z.infer<typeof DocumentationModelSchema>;
