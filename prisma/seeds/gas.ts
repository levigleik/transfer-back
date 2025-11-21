import type { CreateGasDTO } from "@/modules/gas/gas.schemas";

export const gas = [
  {
    id: 1,
    type: 'Diesel'
  },
  {
    id: 2,
    type: 'Etanol'
  },
  {
    id: 3,
    type: 'Gasolina'
  }
] as (CreateGasDTO & { id: number })[];
