import { buildError } from "@/lib/error/build-error";
import { HttpError } from "@/lib/error/http-error";
import type { NextFunction, Request, Response } from "express";

export const errorMiddleware = (
	err: Error | HttpError,
	req: Request,
	res: Response,
	next: NextFunction,
): void => {
	try {
		// If it's already an HttpError, use it directly
		if (err instanceof HttpError) {
			res.status(err.statusCode).json({
				message: err.message,
				statusCode: err.statusCode,
				error: err.name,
			});
			return;
		}

		// Otherwise, use buildError to convert it to an appropriate HttpError
		buildError(err);
	} catch (error) {
		// buildError will throw an HttpError, which we can then handle
		if (error instanceof HttpError) {
			res.status(error.statusCode).json({
				message: error.message,
				statusCode: error.statusCode,
				error: error.name,
			});
			return;
		}

		// If something unexpected happened, return 500
		console.error(error);
		res.status(500).json({
			message: "Internal Server Error",
			statusCode: 500,
			error: "InternalError",
		});
	}
};
