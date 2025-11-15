import * as z from 'zod';

// prettier-ignore
export const CompanyModelSchema = z.object({
    id: z.number().int(),
    name: z.string(),
    cnpj: z.string(),
    vehicles: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CompanyPureType = z.infer<typeof CompanyModelSchema>;
