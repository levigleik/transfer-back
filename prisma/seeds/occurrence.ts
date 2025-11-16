import type { CreateOccurrenceDTO } from "@/modules/occurrence/occurrence.schemas";
import { faker } from "@faker-js/faker/locale/pt_BR";

const classificationIds = [1, 2, 3];
const seriousnessIds = [1, 2, 3];

export const occurrence = [
	{
		date: faker.date.past(),
		description: faker.lorem.word(5),
		classificationId: faker.helpers.arrayElement(classificationIds),
		seriousnessId: faker.helpers.arrayElement(seriousnessIds),
	},
	{
		date: faker.date.past(),
		description: faker.lorem.word(3),
		classificationId: faker.helpers.arrayElement(classificationIds),
		seriousnessId: faker.helpers.arrayElement(seriousnessIds),
	},
	{
		date: faker.date.past(),
		description: faker.lorem.word(6),
		classificationId: faker.helpers.arrayElement(classificationIds),
		seriousnessId: faker.helpers.arrayElement(seriousnessIds),
	},
	{
		date: faker.date.past(),
		description: faker.lorem.word(5),
		classificationId: faker.helpers.arrayElement(classificationIds),
		seriousnessId: faker.helpers.arrayElement(seriousnessIds),
	},
] as CreateOccurrenceDTO[];
