import type { CreateOccurrenceDTO } from "@/modules/occurrence/occurrence.schemas";
import { faker } from "@faker-js/faker/locale/pt_BR";
import { classification } from "./classification";
import { seriousness } from "./seriousness";
import { vehicle } from "./vehicle";

const classificationIds = classification.map((c) => c.id);
const seriousnessIds = seriousness.map((s) => s.id);
const vehicleIds = vehicle.map((v) => v.id);

export const occurrence = [
	{
		id: 1,
		occurrenceDate: faker.date.past(),
		registerDate: faker.date.past(),
		description: faker.lorem.word(5),
		classificationId: faker.helpers.arrayElement(classificationIds),
		seriousnessId: faker.helpers.arrayElement(seriousnessIds),
		vehicleId: faker.helpers.arrayElement(vehicleIds),
	},
	{
		id: 2,
		occurrenceDate: faker.date.past(),
		registerDate: faker.date.past(),
		description: faker.lorem.word(3),
		classificationId: faker.helpers.arrayElement(classificationIds),
		seriousnessId: faker.helpers.arrayElement(seriousnessIds),
		vehicleId: faker.helpers.arrayElement(vehicleIds),
	},
	{
		id: 3,
		occurrenceDate: faker.date.past(),
		registerDate: faker.date.past(),
		description: faker.lorem.word(6),
		classificationId: faker.helpers.arrayElement(classificationIds),
		seriousnessId: faker.helpers.arrayElement(seriousnessIds),
		vehicleId: faker.helpers.arrayElement(vehicleIds),
	},
	{
		id: 4,
		occurrenceDate: faker.date.past(),
		registerDate: faker.date.past(),
		description: faker.lorem.word(5),
		classificationId: faker.helpers.arrayElement(classificationIds),
		seriousnessId: faker.helpers.arrayElement(seriousnessIds),
		vehicleId: faker.helpers.arrayElement(vehicleIds),
	},
] as (CreateOccurrenceDTO & { id: number })[];
