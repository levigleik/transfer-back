import * as z from 'zod';

// prettier-ignore
export const SeriousnessInputSchema = z.object({
    id: z.number().int(),
    level: z.string(),
    occurences: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type SeriousnessInputType = z.infer<typeof SeriousnessInputSchema>;
