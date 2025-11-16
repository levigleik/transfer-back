import type { CreateGasSupplyDTO } from "@/modules/gas-supply/gas-supply.schemas";
import { faker } from "@faker-js/faker/locale/pt_BR";

export const gasSupply = [
	{
		kmToReview: faker.number.int({ min: 200, max: 2100 }),
		kmToStop: faker.number.int({ min: 200, max: 2100 }),
		quantity: faker.number.float({ min: 30, max: 100 }),
		supplyAt: faker.date.future(),
		totalPrice: faker.number.float({ min: 80, max: 410 }),
	},
	{
		kmToReview: faker.number.int({ min: 200, max: 2100 }),
		kmToStop: faker.number.int({ min: 200, max: 2100 }),
		quantity: faker.number.float({ min: 30, max: 100 }),
		supplyAt: faker.date.future(),
		totalPrice: faker.number.float({ min: 80, max: 410 }),
	},
	{
		kmToReview: faker.number.int({ min: 200, max: 2100 }),
		kmToStop: faker.number.int({ min: 200, max: 2100 }),
		quantity: faker.number.float({ min: 30, max: 100 }),
		supplyAt: faker.date.future(),
		totalPrice: faker.number.float({ min: 80, max: 410 }),
	},
	{
		kmToReview: faker.number.int({ min: 200, max: 2100 }),
		kmToStop: faker.number.int({ min: 200, max: 2100 }),
		quantity: faker.number.float({ min: 30, max: 100 }),
		supplyAt: faker.date.future(),
		totalPrice: faker.number.float({ min: 80, max: 410 }),
	},
] as CreateGasSupplyDTO[];
