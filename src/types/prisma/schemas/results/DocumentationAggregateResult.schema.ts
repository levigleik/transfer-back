import * as z from 'zod';
export const DocumentationAggregateResultSchema = z.object({  _count: z.object({
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
  }).nullable().optional()});