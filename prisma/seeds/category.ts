import type { CreateCategoryDTO } from "@/modules/category/category.schemas";
import { faker } from "@faker-js/faker/locale/pt_BR";

const onibusTypes = ["Ônibus", "Micro-Ônibus", "Caminhão"];

export const category = [
	{
		name: faker.helpers.arrayElement(onibusTypes),
	},
	{
		name: faker.helpers.arrayElement(onibusTypes),
	},
	{
		name: faker.helpers.arrayElement(onibusTypes),
	},
] as CreateCategoryDTO[];
