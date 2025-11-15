import * as z from 'zod';

export const VehicleScalarFieldEnumSchema = z.enum(['id', 'identifier', 'model', 'year', 'capacity', 'doors', 'uf', 'plateType', 'plate', 'renavam', 'chassis', 'review', 'description', 'photos', 'gasId', 'brandId', 'categoryId', 'companyId', 'createdAt', 'updatedAt'])

export type VehicleScalarFieldEnum = z.infer<typeof VehicleScalarFieldEnumSchema>;