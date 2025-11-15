import { asyncMiddleware } from "@/lib/async-middleware";
import type { NextFunction, Request, Response } from "express";
import { type ZodError, type ZodType, z } from "zod";

// Type definitions for our validation schemas
export interface Schema {
	querySchema?: ZodType;
	bodySchema?: ZodType;
	paramsSchema?: ZodType;
	headerSchema?: ZodType;
}

// Helper function for parsing with schema and custom error messages
const parseWithSchema = ({
	data,
	schema,
	errorMessage,
}: {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	data: any;
	schema?: ZodType;
	errorMessage: string;
}) => {
	if (!schema) return;

	const result = schema.safeParse(data);
	if (!result.success) {
		throw new Error(`${errorMessage}: ${result.error.message}`);
	}
	return result.data;
};

// Main validation middleware
const validateWithZodAsync =
	({ querySchema, bodySchema, paramsSchema, headerSchema }: Schema) =>
	async (req: Request, res: Response, next: NextFunction) => {
		try {
			// Parse query parameters
			parseWithSchema({
				data: req.query,
				schema: querySchema,
				errorMessage: "Unrecognized query parameters",
			});

			// Parse request body
			parseWithSchema({
				data: req.body,
				schema: bodySchema,
				errorMessage: "Invalid request body",
			});

			// Parse route parameters
			parseWithSchema({
				data: req.params,
				schema: paramsSchema,
				errorMessage: "Invalid route parameters",
			});

			// Parse headers
			parseWithSchema({
				data: req.headers,
				schema: headerSchema,
				errorMessage: "Invalid headers",
			});

			return next();
		} catch (err) {
			const error =
				err instanceof z.ZodError
					? formatZodError(err)
					: (err as Error).message;

			return res.status(400).json({
				success: false,
				message: "Validation failed",
				errors: error,
			});
		}
	};

export const validateWithZod = (schema: Schema) =>
	asyncMiddleware(validateWithZodAsync(schema));

// Helper function to format Zod validation errors
const formatZodError = (
	error: ZodError,
): { field: string; message: string }[] => {
	return error.issues.map((issue) => ({
		field: issue.path.length > 0 ? issue.path.join(".") : "root",
		message: issue.message,
	}));
};

// Convenience functions for specific validation types
export const validateBody = (schema: ZodType) =>
	validateWithZod({ bodySchema: schema });
export const validateQuery = (schema: ZodType) =>
	validateWithZod({ querySchema: schema });
export const validateParams = (schema: ZodType) =>
	validateWithZod({ paramsSchema: schema });
export const validateHeaders = (schema: ZodType) =>
	validateWithZod({ headerSchema: schema });
