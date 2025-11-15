import { prisma } from "@/lib/prisma";

export async function clearDatabase() {
	const tablenames = await prisma.$queryRaw<
		{ tablename: string }[]
	>`SELECT tablename FROM pg_tables WHERE schemaname = 'public'`;

	// Desabilita verificação de FK
	await prisma.$executeRawUnsafe(`SET session_replication_role = 'replica';`);

	for (const { tablename } of tablenames) {
		if (tablename !== "_prisma_migrations") {
			try {
				await prisma.$executeRawUnsafe(
					`TRUNCATE TABLE "public"."${tablename}" RESTART IDENTITY CASCADE;`,
				);
			} catch (err) {
				console.log(`Erro ao limpar tabela ${tablename}:`, err);
			}
		}
	}

	// Reabilita FK
	await prisma.$executeRawUnsafe(`SET session_replication_role = 'origin';`);
}
