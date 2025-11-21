import type { CreateGasSupplyDTO } from "@/modules/gas-supply/gas-supply.schemas";
import { faker } from "@faker-js/faker/locale/pt_BR";
import { gas } from "./gas";
import { vehicle } from "./vehicle";
import { gasStation } from "./gas-station";

const gasIds = gas.map((g) => g.id);
const vehicleIds = vehicle.map((v) => v.id);
const gasStationIds = gasStation.map((g) => g.id);

export const gasSupply = [
	{
		id: 1,
		kmToReview: faker.number.int({ min: 200, max: 2100 }),
		kmToStop: faker.number.int({ min: 200, max: 2100 }),
		quantity: faker.number.float({ min: 30, max: 100, fractionDigits: 1 }),
		supplyAt: faker.date.future(),
		totalPrice: faker.number.float({ min: 80, max: 410, fractionDigits: 1 }),
		gasId: faker.helpers.arrayElement(gasIds),
		vehicleId: faker.helpers.arrayElement(vehicleIds),
		gasStationId: faker.helpers.arrayElement(gasStationIds),
	},
	{
		id: 2,
		kmToReview: faker.number.int({ min: 200, max: 2100 }),
		kmToStop: faker.number.int({ min: 200, max: 2100 }),
		quantity: faker.number.float({ min: 30, max: 100, fractionDigits: 1 }),
		supplyAt: faker.date.future(),
		totalPrice: faker.number.float({ min: 80, max: 410, fractionDigits: 1 }),
		gasId: faker.helpers.arrayElement(gasIds),
		vehicleId: faker.helpers.arrayElement(vehicleIds),
		gasStationId: faker.helpers.arrayElement(gasStationIds),
	},
	{
		id: 3,
		kmToReview: faker.number.int({ min: 200, max: 2100 }),
		kmToStop: faker.number.int({ min: 200, max: 2100 }),
		quantity: faker.number.float({ min: 30, max: 100, fractionDigits: 1 }),
		supplyAt: faker.date.future(),
		totalPrice: faker.number.float({ min: 80, max: 410, fractionDigits: 1 }),
		gasId: faker.helpers.arrayElement(gasIds),
		vehicleId: faker.helpers.arrayElement(vehicleIds),
		gasStationId: faker.helpers.arrayElement(gasStationIds),
	},
	{
		id: 4,
		kmToReview: faker.number.int({ min: 200, max: 2100 }),
		kmToStop: faker.number.int({ min: 200, max: 2100 }),
		quantity: faker.number.float({ min: 30, max: 100, fractionDigits: 1 }),
		supplyAt: faker.date.future(),
		totalPrice: faker.number.float({ min: 80, max: 410, fractionDigits: 1 }),
		gasId: faker.helpers.arrayElement(gasIds),
		vehicleId: faker.helpers.arrayElement(vehicleIds),
		gasStationId: faker.helpers.arrayElement(gasStationIds),
	},
] as (CreateGasSupplyDTO & { id: number })[];
