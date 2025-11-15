import * as z from 'zod';

import { PlateTypeSchema } from '../../enums/PlateType.schema';
// prettier-ignore
export const VehicleResultSchema = z.object({
    id: z.number().int(),
    identifier: z.number().int(),
    model: z.string(),
    year: z.string(),
    capacity: z.string(),
    doors: z.string(),
    uf: z.string(),
    plateType: PlateTypeSchema,
    plate: z.string(),
    renavam: z.string(),
    chassis: z.string(),
    review: z.number().int(),
    description: z.string().nullable(),
    photos: z.array(z.string()),
    gas: z.unknown(),
    gasId: z.number().int(),
    brand: z.unknown(),
    brandId: z.number().int(),
    category: z.unknown(),
    categoryId: z.number().int(),
    company: z.unknown(),
    companyId: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type VehicleResultType = z.infer<typeof VehicleResultSchema>;
