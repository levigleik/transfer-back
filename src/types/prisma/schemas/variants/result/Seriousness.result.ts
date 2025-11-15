import * as z from 'zod';

// prettier-ignore
export const SeriousnessResultSchema = z.object({
    id: z.number().int(),
    level: z.string(),
    occurences: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type SeriousnessResultType = z.infer<typeof SeriousnessResultSchema>;
