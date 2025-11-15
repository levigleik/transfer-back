import "express-async-errors";

import "@/lib/env";
import { app } from "./app";
import { logger } from "./lib/logger";
import { connectRedis, disconnectRedis } from "./lib/redis";
const port = process.env.PORT || 3000;
const host = `http://localhost:${port}`;

const server = app.listen(port, async () => {
	logger.info({ port }, `Server running at: ${host}`);
	logger.info(`Docs Swagger UI running on ${host}/doc`);
	logger.info(`Docs Scalar UI running on ${host}/doc-scalar`);
	try {
		await connectRedis();
		logger.info("Redis connected on startup");
	} catch (err) {
		logger.error({ err }, "Failed to connect to Redis on startup");
	}
});

const shutdown = async (signal: string) => {
	logger.warn({ signal }, "Shutting down gracefully...");
	server.close(async () => {
		await disconnectRedis();
		logger.info("Shutdown complete");
		process.exit(0);
	});
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
