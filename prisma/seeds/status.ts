import type { CreateStatusDTO } from "@/modules/status/status.schemas";
export const status = [
	{
		id: 1,
		name: "Indefinido",
	},
	{
		id: 2,
		name: "Acidente",
	},
	{
		id: 3,
		name: "Liberado",
	},
	{
		id: 4,
		name: "Inativo",
	},
	{
		id: 5,
		name: "Manutenção",
	},
] as (CreateStatusDTO & { id: number })[];
