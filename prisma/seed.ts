import { PrismaClient } from "@prisma/client";
import * as seeds from "./seeds";

const prisma = new PrismaClient();

async function main() {
	console.log("🌱 Iniciando seed de produção...");

	// ----------------------------------------------------
	// ETAPA 1: SEEDS SEM DEPENDÊNCIAS (Chaves estrangeiras)
	// ----------------------------------------------------

	console.log("-> Inserindo Marcas (Brands)...");
	for (const data of seeds.brand) {
		await prisma.brand.upsert({
			where: { id: data.id, name: data.name },
			update: { ...data, id: undefined },
			create: { ...data, id: undefined },
		});
	}

	console.log("-> Inserindo Categorias...");
	for (const data of seeds.category) {
		await prisma.category.upsert({
			where: { id: data.id, name: data.name },
			update: { ...data, id: undefined },
			create: { ...data, id: undefined },
		});
	}

	console.log("-> Inserindo Classificações...");
	for (const data of seeds.classification) {
		await prisma.classification.upsert({
			where: { id: data.id },
			update: { ...data, id: undefined },
			create: { ...data, id: undefined },
		});
	}
	console.log("-> Inserindo Companhias...");
	for (const data of seeds.company) {
		await prisma.company.upsert({
			where: { id: data.id, cnpj: data.cnpj },
			update: { ...data, id: undefined },
			create: { ...data, id: undefined },
		});
	}

	console.log("-> Inserindo Documentações...");
	for (const data of seeds.documentation) {
		await prisma.documentation.upsert({
			where: { id: data.id },
			update: { ...data, id: undefined },
			create: { ...data, id: undefined },
		});
	}

	console.log("-> Inserindo Combustíveis...");
	for (const data of seeds.gas) {
		await prisma.gas.upsert({
			where: { id: data.id },
			update: { ...data, id: undefined },
			create: { ...data, id: undefined },
		});
	}

	console.log("-> Inserindo Postos de Gasolina...");
	for (const data of seeds.gasStation) {
		await prisma.gasStation.upsert({
			where: { id: data.id },
			update: { ...data, id: undefined },
			create: { ...data, id: undefined },
		});
	}

	console.log("-> Inserindo Seriedade...");
	for (const data of seeds.seriousness) {
		await prisma.seriousness.upsert({
			where: { id: data.id },
			update: { ...data, id: undefined },
			create: { ...data, id: undefined },
		});
	}

	console.log("-> Inserindo Status...");
	for (const data of seeds.status) {
		await prisma.status.upsert({
			where: { id: data.id },
			update: { ...data, id: undefined },
			create: { ...data, id: undefined },
		});
	}

	// ----------------------------------------------------
	// ETAPA 2: SEEDS COM DEPENDÊNCIAS
	// ----------------------------------------------------

	console.log("-> Inserindo Abastecimentos...");
	for (const data of seeds.gasSupply) {
		await prisma.gasSupply.upsert({
			where: { id: data.id },
			update: { ...data, id: undefined },
			create: { ...data, id: undefined },
		});
	}

	console.log("-> Inserindo Ocorrências...");
	for (const data of seeds.occurrence) {
		await prisma.occurrence.upsert({
			where: { id: data.id },
			update: { ...data, id: undefined },
			create: { ...data, id: undefined },
		});
	}
	console.log("-> Inserindo Veículos...");
	for (const data of seeds.vehicle) {
		await prisma.vehicle.upsert({
			where: {
				id: data.id,
				renavam: data.renavam,
				chassi: data.chassi,
				identifier: data.identifier,
			},
			update: { ...data, id: undefined },
			create: { ...data, id: undefined },
		});
	}

	console.log("Seed de produção finalizado! 🌱");
}

main()
	.catch((e) => {
		console.error("Erro durante o seeding:", e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
