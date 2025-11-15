import { Prisma } from "@prisma/client";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import { HttpError } from "./http-error";

export const buildError = (
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	error: any,
	genericMessage = "An unknown error has occurred",
) => {
	if (error instanceof Prisma.PrismaClientKnownRequestError) {
		throw new HttpError(error.message, 400, error.name);
	}
	if (error instanceof Prisma.PrismaClientUnknownRequestError) {
		throw new HttpError(error.message, 400, error.name);
	}
	if (error instanceof Prisma.PrismaClientRustPanicError) {
		throw new HttpError(error.message, 500, error.name);
	}
	if (error instanceof Prisma.PrismaClientInitializationError) {
		throw new HttpError(error.message, 500, error.name);
	}
	if (error instanceof Prisma.PrismaClientValidationError) {
		throw new HttpError(error.message, 400, error.name);
	}
	if (error instanceof JsonWebTokenError) {
		throw new HttpError(error.message, 401, "JsonWebTokenError");
	}
	if (error instanceof TokenExpiredError) {
		throw new HttpError(error.message, 401, "TokenExpiredError");
	}
	if (error.statusCode) {
		throw new error();
	}

	throw new HttpError(genericMessage, 500, "error");
};
