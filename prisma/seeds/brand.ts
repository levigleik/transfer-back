import type { CreateBrandDTO } from "@/modules/brand/brand.schemas";
import { faker } from "@faker-js/faker/locale/pt_BR";

export const brand = [
	{
		id: 1,
		name: "Scania",
	},
	{
		id: 2,
		name: "Merdes-Benz",
	},
	{
		id: 3,
		name: "Volvo",
	},
	{
		id: 4,
		name: "Ford",
	},
] as (CreateBrandDTO & { id: number })[];
