import * as z from 'zod';
export const OccurenceGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  date: z.date(),
  description: z.string(),
  seriousnessId: z.number().int(),
  classificationId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    date: z.number(),
    description: z.number(),
    seriousness: z.number(),
    seriousnessId: z.number(),
    classification: z.number(),
    classificationId: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    seriousnessId: z.number().nullable(),
    classificationId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    seriousnessId: z.number().nullable(),
    classificationId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    date: z.date().nullable(),
    description: z.string().nullable(),
    seriousnessId: z.number().int().nullable(),
    classificationId: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    date: z.date().nullable(),
    description: z.string().nullable(),
    seriousnessId: z.number().int().nullable(),
    classificationId: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));