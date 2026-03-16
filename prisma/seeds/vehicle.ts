import { plateGenerator } from "@/lib/plate-generator";
import type { CreateVehicleDTO } from "@/modules/vehicle/vehicle.schemas";
import { faker } from "@faker-js/faker/locale/pt_BR";
import { PlateType } from "@prisma/client";
import { brand } from "./brand";
import { category } from "./category";
import { classification } from "./classification";
import { company } from "./company";
import { gas } from "./gas";
import { status } from "./status";

const plateTypes = Object.keys(PlateType);

const gasIds = gas.map((g) => g.id);
const brandIds = brand.map((b) => b.id);
const categoryIds = category.map((c) => c.id);
const companyIds = company.map((c) => c.id);
const classificationIds = classification.map((c) => c.id);
const statusIds = status.map((s) => s.id);

export const vehicle = [
	{
		id: 1,
		identifier: "51c",
		model: faker.vehicle.model(),
		year: String(faker.number.int({ min: 1992, max: 2025 })),
		capacity: faker.number.int({ min: 28, max: 61 }),
		doors: faker.number.int({ min: 2, max: 4 }),
		uf: faker.location.state({ abbreviated: true }),
		plateType: faker.helpers.arrayElement(plateTypes),
		plate: plateGenerator(),
		renavam: faker.string.numeric({ length: 11 }),
		chassi: faker.string.alphanumeric({ length: 17, casing: "upper" }),
		review: faker.number.int({ min: 10, max: 120 }),
		description: faker.lorem.word({ length: { min: 2, max: 5 } }),
		photos: ["/uploads/vehicles/samples/1.jpg"],
		gasId: faker.helpers.arrayElement(gasIds),
		brandId: faker.helpers.arrayElement(brandIds),
		categoryId: faker.helpers.arrayElement(categoryIds),
		companyId: faker.helpers.arrayElement(companyIds),
		classificationId: faker.helpers.arrayElement(classificationIds),
		statusId: faker.helpers.arrayElement(statusIds),
	},
	{
		id: 2,
		identifier: "42",
		model: faker.vehicle.model(),
		year: String(faker.number.int({ min: 1992, max: 2025 })),
		capacity: faker.number.int({ min: 28, max: 61 }),
		doors: faker.number.int({ min: 2, max: 4 }),
		uf: faker.location.state({ abbreviated: true }),
		plateType: faker.helpers.arrayElement(plateTypes),
		plate: plateGenerator(),
		renavam: faker.string.numeric({ length: 11 }),
		chassi: faker.string.alphanumeric({ length: 17, casing: "upper" }),
		review: faker.number.int({ min: 10, max: 120 }),
		description: faker.lorem.word({ length: { min: 2, max: 5 } }),
		photos: ["/uploads/vehicles/samples/2.jpg"],
		gasId: faker.helpers.arrayElement(gasIds),
		brandId: faker.helpers.arrayElement(brandIds),
		categoryId: faker.helpers.arrayElement(categoryIds),
		companyId: faker.helpers.arrayElement(companyIds),
		classificationId: faker.helpers.arrayElement(classificationIds),
		statusId: faker.helpers.arrayElement(statusIds),
	},
	{
		id: 3,
		identifier: "23h",
		model: faker.vehicle.model(),
		year: String(faker.number.int({ min: 1992, max: 2025 })),
		capacity: faker.number.int({ min: 28, max: 61 }),
		doors: faker.number.int({ min: 2, max: 4 }),
		uf: faker.location.state({ abbreviated: true }),
		plateType: faker.helpers.arrayElement(plateTypes),
		plate: plateGenerator(),
		renavam: faker.string.numeric({ length: 11 }),
		chassi: faker.string.alphanumeric({ length: 17, casing: "upper" }),
		review: faker.number.int({ min: 10, max: 120 }),
		description: faker.lorem.word({ length: { min: 2, max: 5 } }),
		photos: ["/uploads/vehicles/samples/3.jpg"],
		gasId: faker.helpers.arrayElement(gasIds),
		brandId: faker.helpers.arrayElement(brandIds),
		categoryId: faker.helpers.arrayElement(categoryIds),
		companyId: faker.helpers.arrayElement(companyIds),
		classificationId: faker.helpers.arrayElement(classificationIds),
		statusId: faker.helpers.arrayElement(statusIds),
	},
	{
		id: 4,
		identifier: "316",
		model: faker.vehicle.model(),
		year: String(faker.number.int({ min: 1992, max: 2025 })),
		capacity: faker.number.int({ min: 28, max: 61 }),
		doors: faker.number.int({ min: 2, max: 4 }),
		uf: faker.location.state({ abbreviated: true }),
		plateType: faker.helpers.arrayElement(plateTypes),
		plate: plateGenerator(),
		renavam: faker.string.numeric({ length: 11 }),
		chassi: faker.string.alphanumeric({ length: 17, casing: "upper" }),
		review: faker.number.int({ min: 10, max: 120 }),
		description: faker.lorem.word({ length: { min: 2, max: 5 } }),
		photos: ["/uploads/vehicles/samples/4.jpg"],
		gasId: faker.helpers.arrayElement(gasIds),
		brandId: faker.helpers.arrayElement(brandIds),
		categoryId: faker.helpers.arrayElement(categoryIds),
		companyId: faker.helpers.arrayElement(companyIds),
		classificationId: faker.helpers.arrayElement(classificationIds),
		statusId: faker.helpers.arrayElement(statusIds),
	},
] as (CreateVehicleDTO & { id: number })[];
