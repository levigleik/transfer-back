import { env } from "@/lib/env";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
	console.log("🌱 Iniciando seed de produção...");

	const admin = await prisma.user.findUnique({
		where: { email: adminEmail },
	});

	if (!admin) {
		const hashedPassword = await bcrypt.hash(adminPassword, 10);
		await prisma.user.create({
			data: {
				email: adminEmail,
				name: "Admin",
				password: hashedPassword,
				active: true,
			},
		});
		console.log(`✅ Usuário admin "${adminEmail}" criado com sucesso.`);
	} else {
		console.log(`ℹ️ Usuário admin "${adminEmail}" já existe. Pulando.`);
	}

	console.log("Seed de produção finalizado! 🌱");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
