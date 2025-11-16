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
		name: faker.helpers.arrayElement(companyNames),
		cnpj: generateCNPJ(),
	},
	{
		name: faker.helpers.arrayElement(companyNames),
		cnpj: generateCNPJ(),
	},
	{
		name: faker.helpers.arrayElement(companyNames),
		cnpj: generateCNPJ(),
	},
	{
		name: faker.helpers.arrayElement(companyNames),
		cnpj: generateCNPJ(),
	},
	{
		name: faker.helpers.arrayElement(companyNames),
		cnpj: generateCNPJ(),
	},
] as CreateCompanyDTO[];
