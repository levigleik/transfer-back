import * as z from 'zod';
import { PlateTypeSchema } from '../enums/PlateType.schema';

export const VehicleSchema = z.object({
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
  description: z.string().nullish(),
  photos: z.array(z.string()),
  gasId: z.number().int(),
  brandId: z.number().int(),
  categoryId: z.number().int(),
  companyId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type VehicleType = z.infer<typeof VehicleSchema>;
