import type { CreateCategoryDTO } from "@/modules/category/category.schemas";

export const category = [
	{
		id: 1,
		name: "Ônibus",
	},
	{
		id: 2,
		name: "Micro-Ônibus",
	},
	{
		id: 3,
		name: "Caminhão",
	},
] as (CreateCategoryDTO & { id: number })[];
