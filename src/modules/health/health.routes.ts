import { prisma } from "@/lib/prisma";
import { checkRedisHealth } from "@/lib/redis";
import express from "express";
import type { Request, Response } from "express";

const router = express.Router();

let lastCheck = {
	status: "unknown" as string as "ok" | "degraded" | "unknown",
	db: "unknown",
	redis: "unknown",
	timestamp: 0,
};

const CACHE_TTL = 30 * 1000; // 30 segundos

router.get("/health", async (req: Request, res: Response) => {
	/*
		#swagger.tags = ['Health']
	*/

	const now = Date.now();

	// Se o último check foi há menos de 30s, retorna o cache
	if (now - lastCheck.timestamp < CACHE_TTL) {
		res
			.status(lastCheck.status === "ok" ? 200 : 503)
			.json({ ...lastCheck, cache: true });
		return;
	}

	const [dbOk, redisOk] = await Promise.all([
		prisma.$queryRaw`SELECT 1`.then(() => true).catch(() => false),
		checkRedisHealth().catch(() => false),
	]);

	const statusCode = dbOk && redisOk ? 200 : 503;
	const result = {
		status: (statusCode === 200 ? "ok" : "degraded") as typeof lastCheck.status,
		db: dbOk ? "up" : "down",
		redis: redisOk ? "up" : "down",
		timestamp: now,
	};

	lastCheck = result;

	res.status(statusCode).json(result);
});

export default router;
