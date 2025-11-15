import * as z from 'zod';

export const SessionSchema = z.object({
  id: z.number().int(),
  refreshToken: z.string(),
  expiresAt: z.date(),
  userId: z.number().int(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type SessionType = z.infer<typeof SessionSchema>;
