import path from "node:path";
import { glob } from "glob";
import swaggerAutogen from "swagger-autogen";
import { ZodDate, ZodNullable, ZodOptional, toJSONSchema, z } from "zod";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function cleanIntegerLimits(schema: any) {
	if (schema.type === "integer") {
		// biome-ignore lint/performance/noDelete: <explanation>
		if (schema.minimum === Number.MIN_SAFE_INTEGER) delete schema.minimum;
		// biome-ignore lint/performance/noDelete: <explanation>
		if (schema.maximum === Number.MAX_SAFE_INTEGER) delete schema.maximum;
	}

	// Recursivo para objetos
	if (schema.properties) {
		for (const key of Object.keys(schema.properties)) {
			cleanIntegerLimits(schema.properties[key]);
		}
	}

	return schema;
}

/**
 * Remove as transformações de um schema Zod para torná-lo compatível com toJsonSchema.
 * Especificamente, substitui campos de data com transformações por z.string().datetime().
 * @param schema O schema Zod a ser sanitizado.
 * @returns Um novo schema Zod sem transformações.
 */
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function sanitizeSchema(schema: any): any {
	const shape = schema.shape;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const newShape: Record<string, any> = {};

	for (const key in shape) {
		const field = shape[key];

		// unwrap optional
		if (field instanceof ZodOptional) {
			const inner = field._def.innerType;
			const sanitizedInner = sanitizeField(inner);
			newShape[key] = z.optional(sanitizedInner);
			continue;
		}

		// unwrap nullable
		if (field instanceof ZodNullable) {
			const inner = field._def.innerType;
			const sanitizedInner = sanitizeField(inner);
			newShape[key] = z.nullable(sanitizedInner);
			continue;
		}

		newShape[key] = sanitizeField(field);
	}

	return z.object(newShape);
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function sanitizeField(field: any): any {
	// transforma date → string.datetime()
	if (field instanceof ZodDate) {
		return z.iso.datetime({
			message: "Date must be in ISO 8601 format",
		});
	}

	return field; // outros tipos permanecem iguais
}

export async function generateSwaggerDocs() {
	const schemas = {};

	const schemaFiles = await glob("src/modules/**/*.schemas.ts");
	for (const file of schemaFiles) {
		const absolutePath = path.resolve(file);
		const moduleSchemas = await import(absolutePath);

		for (const key in moduleSchemas) {
			const exportedItem = moduleSchemas[key];

			if (exportedItem instanceof z.ZodObject) {
				const schemaName = key.replace(/Schema$/, "");
				const sanitized = sanitizeSchema(exportedItem);
				schemas[schemaName] = toJSONSchema(sanitized);
				cleanIntegerLimits(schemas[schemaName]);
			}
		}
	}

	const doc = {
		info: {
			title: "CRUD com Express, Zod e Prisma ORM",
			description: "Documentação da API CRUD",
		},
		host: `localhost:${process.env.PORT || 3000}`,
		components: {
			"@schemas": schemas,
		},
	};
	const outputFile = "../swagger-output.json";
	const routes = ["../src/routes/index.ts"];

	await swaggerAutogen({ openapi: "3.0.0" })(outputFile, routes, doc);
}

generateSwaggerDocs().then(async () => {
	await import("../src/index");
});
