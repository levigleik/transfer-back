import type { CreateBrandDTO } from "@/modules/brand/brand.schemas";
import { faker } from "@faker-js/faker/locale/pt_BR";

export const brand = [
	{
		id: 1,
		name: faker.vehicle.manufacturer(),
	},
	{
		id: 2,
		name: faker.vehicle.manufacturer(),
	},
	{
		id: 3,
		name: faker.vehicle.manufacturer(),
	},
	{
		id: 4,
		name: faker.vehicle.manufacturer(),
	},
] as (CreateBrandDTO & { id: number })[];
