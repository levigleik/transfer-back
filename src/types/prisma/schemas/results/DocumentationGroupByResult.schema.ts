import * as z from 'zod';
export const DocumentationGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  type: z.string(),
  expiryAt: z.date(),
  antecipateRenewal: z.boolean(),
  days: z.array(z.string()),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    type: z.number(),
    expiryAt: z.number(),
    antecipateRenewal: z.number(),
    days: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    type: z.string().nullable(),
    expiryAt: z.date().nullable(),
    days: z.array(z.string()).nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    type: z.string().nullable(),
    expiryAt: z.date().nullable(),
    days: z.array(z.string()).nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));