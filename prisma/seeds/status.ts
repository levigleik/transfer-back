import type { CreateStatusDTO } from "@/modules/status/status.schemas";
export const status = [
	{
		name: "Liberado",
	},
	{
		name: "Pendente",
	},
	{
		name: "Vencido",
	},
	{
		name: "Arquivado",
	},
] as CreateStatusDTO[];
