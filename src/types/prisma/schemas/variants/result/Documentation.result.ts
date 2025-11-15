import * as z from 'zod';

// prettier-ignore
export const DocumentationResultSchema = z.object({
    id: z.number().int(),
    type: z.string(),
    expiryAt: z.date(),
    antecipateRenewal: z.boolean(),
    days: z.array(z.string()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type DocumentationResultType = z.infer<typeof DocumentationResultSchema>;
