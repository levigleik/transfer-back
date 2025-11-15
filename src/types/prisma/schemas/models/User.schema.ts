import * as z from 'zod';

export const UserSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  name: z.string().nullish(),
  password: z.string(),
  active: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type UserType = z.infer<typeof UserSchema>;
