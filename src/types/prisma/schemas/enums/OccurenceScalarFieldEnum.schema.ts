import * as z from 'zod';

export const OccurenceScalarFieldEnumSchema = z.enum(['id', 'date', 'description', 'seriousnessId', 'classificationId', 'createdAt', 'updatedAt'])

export type OccurenceScalarFieldEnum = z.infer<typeof OccurenceScalarFieldEnumSchema>;