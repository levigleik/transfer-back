import type { CreateGasStationDTO } from "@/modules/gas-station/gas-station.schemas";

export const gasStation = [
  {
    id: 1,
    name: 'Ipiranga'
  },
  {
    id: 2,
    name: 'Petrobrás'
  },
  {
    id: 3,
    name: 'Shell'
  },
  {
    id: 4,
    name: 'Ale'
  }
] as (CreateGasStationDTO & { id: number })[];
