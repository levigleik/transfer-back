import type { CreateSeriousnessDTO } from "@/modules/seriousness/seriousness.schemas";

export const seriousness = [
  {
    id: 1,
    level: 'Baixa'
  },
  {
    id: 2,
    level: 'Média'
  },
  {
    id: 3,
    level: 'Alta'
  },
  {
    id: 4,
    level: 'Grave'
  }
] as (CreateSeriousnessDTO & { id: number })[];
