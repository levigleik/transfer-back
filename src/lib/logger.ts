import pino, { type LoggerOptions, type Logger } from "pino";
import pinoHttp, { type Options as PinoHttpOptions } from "pino-http";

const environment = process.env.NODE_ENV ?? "development";
const logLevel =
	process.env.LOG_LEVEL ?? (environment === "production" ? "info" : "debug");

const baseOptions: LoggerOptions = {
	level: logLevel,
	base: undefined, // do not include pid/hostname by default
};

// Pretty transport only in non-production for local readability
const logger: Logger =
	environment === "production"
		? pino(baseOptions)
		: pino({
				...baseOptions,
				transport: {
					target: "pino-pretty",
					options: {
						colorize: true,
						singleLine: true,
						timestampKey: "time",
					},
				},
			});

const httpLoggerOptions: PinoHttpOptions = {
	logger,
	customSuccessMessage() {
		return "request completed";
	},
	customErrorMessage() {
		return "request errored";
	},
	// redact common sensitive headers
	redact: {
		paths: ["req.headers.authorization", "req.headers.cookie"],
		remove: true,
	},
};

export const httpLogger = pinoHttp(httpLoggerOptions);
export { logger };
