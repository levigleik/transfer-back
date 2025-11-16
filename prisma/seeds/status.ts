import type { CreateStatusDTO } from "@/modules/status/status.schemas";
export const status = [
  {
    id: 1,
    name: 'Liberado'
  },
  {
    id: 2,
    name: 'Pendente'
  },
  {
    id: 3,
    name: 'Vencido'
  },
  {
    id: 4,
    name: 'Arquivado'
  }
] as (CreateStatusDTO & { id: number })[];
