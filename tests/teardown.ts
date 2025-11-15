import { prisma } from "../src/lib/prisma";
import { disconnectRedis } from "../src/lib/redis";

module.exports = async () => {
	console.log("\n🛑  Fechando conexão com o banco de dados...");
	await prisma.$disconnect();
	await disconnectRedis();
};
