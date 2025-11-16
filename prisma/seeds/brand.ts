import type { CreateBrandDTO } from "@/modules/brand/brand.schemas";
import {faker} from "@faker-js/faker/locale/pt_BR";

export const brand = [
	{
		name: faker.vehicle.manufacturer(),
	},
	{
		name: faker.vehicle.manufacturer(),
	},
	{
		name: faker.vehicle.manufacturer(),
	},
	{
		name: faker.vehicle.manufacturer(),
	},
] as CreateBrandDTO[];
