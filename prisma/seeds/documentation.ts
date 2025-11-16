import type { CreateDocumentationDTO } from "@/modules/documentation/documentation.schemas";
import { faker } from "@faker-js/faker/locale/pt_BR";

const documentationTypes = [
	"Tacógrafo",
	"RNTRC",
	"Apólice RCTR-C",
	"Laudo de Aferição",
];

const weekDays = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

export const documentation = [
	{
		type: faker.helpers.arrayElement(documentationTypes),
		expiryAt: faker.date.future(),
		anticipateRenewal: true,
		days: faker.helpers.arrayElements(weekDays, { min: 1, max: 4 }),
	},
	{
		type: faker.helpers.arrayElement(documentationTypes),
		expiryAt: faker.date.future(),
		anticipateRenewal: false,
		days: faker.helpers.arrayElements(weekDays, { min: 3, max: 6 }),
	},
	{
		type: faker.helpers.arrayElement(documentationTypes),
		expiryAt: faker.date.future(),
		anticipateRenewal: false,
		days: faker.helpers.arrayElements(weekDays, 2),
	},
	{
		type: faker.helpers.arrayElement(documentationTypes),
		expiryAt: faker.date.future(),
		anticipateRenewal: true,
		days: faker.helpers.arrayElements(weekDays, 1),
	},
] as CreateDocumentationDTO[];
