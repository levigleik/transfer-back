import * as z from 'zod';
export const GasSupplyGroupByResultSchema = z.array(z.object({
  id: z.number().int(),
  kmToReview: z.number().int(),
  kmToStop: z.number().int(),
  quantity: z.number(),
  supplyAt: z.date(),
  totalPrice: z.number(),
  gasId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    kmToReview: z.number(),
    kmToStop: z.number(),
    quantity: z.number(),
    supplyAt: z.number(),
    totalPrice: z.number(),
    gas: z.number(),
    gasId: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    id: z.number().nullable(),
    kmToReview: z.number().nullable(),
    kmToStop: z.number().nullable(),
    quantity: z.number().nullable(),
    totalPrice: z.number().nullable(),
    gasId: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    id: z.number().nullable(),
    kmToReview: z.number().nullable(),
    kmToStop: z.number().nullable(),
    quantity: z.number().nullable(),
    totalPrice: z.number().nullable(),
    gasId: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.number().int().nullable(),
    kmToReview: z.number().int().nullable(),
    kmToStop: z.number().int().nullable(),
    quantity: z.number().nullable(),
    supplyAt: z.date().nullable(),
    totalPrice: z.number().nullable(),
    gasId: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.number().int().nullable(),
    kmToReview: z.number().int().nullable(),
    kmToStop: z.number().int().nullable(),
    quantity: z.number().nullable(),
    supplyAt: z.date().nullable(),
    totalPrice: z.number().nullable(),
    gasId: z.number().int().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));