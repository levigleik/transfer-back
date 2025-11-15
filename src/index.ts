import "express-async-errors";

import "@/lib/env";
import { app } from "./app";
import { logger } from "./lib/logger";
import { connectRedis, disconnectRedis } from "./lib/redis";
const port = process.env.PORT || 3000;

const server = app.listen(port, async () => {
	logger.info({ port }, "Server running 🚀");
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
