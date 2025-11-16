import type { CreateVehicleDTO } from "@/modules/vehicle/vehicle.schemas";
import { faker } from "@faker-js/faker/locale/pt_BR";
import { PlateType } from "@prisma/client";

const plateTypes = Object.keys(PlateType);

export const vehicle = [
	{
		identifier: faker.number.int({ min: 1, max: 400 }),
		model: faker.vehicle.model(),
		year: String(faker.number.int({ min: 1992, max: 2025 })),
		capacity: faker.number.int({ min: 28, max: 61 }),
		doors: faker.number.int({ min: 2, max: 4 }),
		uf: faker.location.state({ abbreviated: true }),
		plateType: faker.helpers.arrayElement(plateTypes),
	},
	{
		identifier: faker.number.int({ min: 1, max: 400 }),
		model: faker.vehicle.model(),
		year: String(faker.number.int({ min: 1992, max: 2025 })),
		capacity: faker.number.int({ min: 28, max: 61 }),
		doors: faker.number.int({ min: 2, max: 4 }),
		uf: faker.location.state({ abbreviated: true }),
		plateType: faker.helpers.arrayElement(plateTypes),
	},
	{
		identifier: faker.number.int({ min: 1, max: 400 }),
		model: faker.vehicle.model(),
		year: String(faker.number.int({ min: 1992, max: 2025 })),
		capacity: faker.number.int({ min: 28, max: 61 }),
		doors: faker.number.int({ min: 2, max: 4 }),
		uf: faker.location.state({ abbreviated: true }),
		plateType: faker.helpers.arrayElement(plateTypes),
	},
	{
		identifier: faker.number.int({ min: 1, max: 400 }),
		model: faker.vehicle.model(),
		year: String(faker.number.int({ min: 1992, max: 2025 })),
		capacity: faker.number.int({ min: 28, max: 61 }),
		doors: faker.number.int({ min: 2, max: 4 }),
		uf: faker.location.state({ abbreviated: true }),
		plateType: faker.helpers.arrayElement(plateTypes),
	},
] as CreateVehicleDTO[];
