// Middleware async universal
import type { NextFunction, Request, Response } from "express";

export const asyncMiddleware =
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		(fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
		(req: Request, res: Response, next: NextFunction) => {
			Promise.resolve(fn(req, res, next)).catch(next);
		};
