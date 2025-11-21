import { generateCNPJ } from "@/lib/cnpj-generator";
import type { CreateCompanyDTO } from "@/modules/company/company.schemas";
import { faker } from "@faker-js/faker/locale/pt_BR";

const companyNames = [
	"Expresso Guanabara",
	"Gontijo",
	"Inbuzios Receptivo",
	"FlixBus",
	"Fretar",
];

export const company = [
	{
		id: 1,
		name: faker.helpers.arrayElement(companyNames),
		cnpj: generateCNPJ(),
	},
	{
		id: 2,
		name: faker.helpers.arrayElement(companyNames),
		cnpj: generateCNPJ(),
	},
	{
		id: 3,
		name: faker.helpers.arrayElement(companyNames),
		cnpj: generateCNPJ(),
	},
	{
		id: 4,
		name: faker.helpers.arrayElement(companyNames),
		cnpj: generateCNPJ(),
	},
	{
		id: 5,
		name: faker.helpers.arrayElement(companyNames),
		cnpj: generateCNPJ(),
	},
] as (CreateCompanyDTO & { id: number })[];
