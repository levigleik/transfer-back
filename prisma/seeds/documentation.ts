import type { CreateDocumentationDTO } from "@/modules/documentation/documentation.schemas";
import { faker } from "@faker-js/faker/locale/pt_BR";
import { vehicle } from "./vehicle";

const documentationTypes = [
	"Tacógrafo",
	"RNTRC",
	"Apólice RCTR-C",
	"Laudo de Aferição",
];

const weekDays = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

const vehicleIds = vehicle.map((v) => v.id);

export const documentation = [
	{
		id: 1,
		type: faker.helpers.arrayElement(documentationTypes),
		expiryAt: faker.date.future(),
		anticipateRenewal: true,
		days: faker.helpers.arrayElements(weekDays, { min: 1, max: 4 }),
		document: "",
		vehicleId: faker.helpers.arrayElement(vehicleIds),
	},
	{
		id: 2,
		type: faker.helpers.arrayElement(documentationTypes),
		expiryAt: faker.date.future(),
		anticipateRenewal: false,
		days: faker.helpers.arrayElements(weekDays, { min: 3, max: 6 }),
		document: "",
		vehicleId: faker.helpers.arrayElement(vehicleIds),
	},
	{
		id: 3,
		type: faker.helpers.arrayElement(documentationTypes),
		expiryAt: faker.date.future(),
		anticipateRenewal: false,
		days: faker.helpers.arrayElements(weekDays, 2),
		document: "",
		vehicleId: faker.helpers.arrayElement(vehicleIds),
	},
	{
		id: 4,
		type: faker.helpers.arrayElement(documentationTypes),
		expiryAt: faker.date.future(),
		anticipateRenewal: true,
		days: faker.helpers.arrayElements(weekDays, 1),
		document: "",
		vehicleId: faker.helpers.arrayElement(vehicleIds),
	},
] as (CreateDocumentationDTO & { id: number })[];
