import type { CreateGasSupplyDTO } from "@/modules/gas-supply/gas-supply.schemas";
import { faker } from "@faker-js/faker/locale/pt_BR";
import { gas } from "./gas";

const gasIds = gas.map((g) => g.id);

export const gasSupply = [
	{
		id: 1,
		kmToReview: faker.number.int({ min: 200, max: 2100 }),
		kmToStop: faker.number.int({ min: 200, max: 2100 }),
		quantity: faker.number.float({ min: 30, max: 100 }),
		supplyAt: faker.date.future(),
		totalPrice: faker.number.float({ min: 80, max: 410 }),
		gasId: faker.helpers.arrayElement(gasIds),
	},
	{
		id: 2,
		kmToReview: faker.number.int({ min: 200, max: 2100 }),
		kmToStop: faker.number.int({ min: 200, max: 2100 }),
		quantity: faker.number.float({ min: 30, max: 100 }),
		supplyAt: faker.date.future(),
		totalPrice: faker.number.float({ min: 80, max: 410 }),
		gasId: faker.helpers.arrayElement(gasIds),
	},
	{
		id: 3,
		kmToReview: faker.number.int({ min: 200, max: 2100 }),
		kmToStop: faker.number.int({ min: 200, max: 2100 }),
		quantity: faker.number.float({ min: 30, max: 100 }),
		supplyAt: faker.date.future(),
		totalPrice: faker.number.float({ min: 80, max: 410 }),
		gasId: faker.helpers.arrayElement(gasIds),
	},
	{
		id: 4,
		kmToReview: faker.number.int({ min: 200, max: 2100 }),
		kmToStop: faker.number.int({ min: 200, max: 2100 }),
		quantity: faker.number.float({ min: 30, max: 100 }),
		supplyAt: faker.date.future(),
		totalPrice: faker.number.float({ min: 80, max: 410 }),
		gasId: faker.helpers.arrayElement(gasIds),
	},
] as (CreateGasSupplyDTO & { id: number })[];
