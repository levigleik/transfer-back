import * as z from 'zod';

export const ProductSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().nullish(),
  photo: z.string().nullish(),
  price: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type ProductType = z.infer<typeof ProductSchema>;
