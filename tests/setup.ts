import { execSync } from "node:child_process";
import { prisma } from "../src/lib/prisma";
import { disconnectRedis } from "../src/lib/redis";

module.exports = async () => {
	console.log("\n🔄  Resetando banco de dados de testes...");
	execSync("npx prisma migrate reset --force --schema=./prisma/schema.prisma");

	await prisma.$disconnect();
	await disconnectRedis();
};
