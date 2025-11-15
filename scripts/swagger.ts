import path from "node:path";
import { glob } from "glob";
import swaggerAutogen from "swagger-autogen";
import { toJSONSchema, z } from "zod";

/**
 * Remove as transformações de um schema Zod para torná-lo compatível com toJsonSchema.
 * Especificamente, substitui campos de data com transformações por z.string().datetime().
 * @param schema O schema Zod a ser sanitizado.
 * @returns Um novo schema Zod sem transformações.
 */

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function sanitizeSchema(schema: z.ZodObject<any, any>) {
	const shape = schema.shape;
	const newShape = { ...shape };

	for (const key in shape) {
		const field = shape[key];

		const isDate = field.def.type === "date";

		if (isDate) {
			newShape[key] = z.iso.datetime({
				message: "Date must be in ISO 8601 format",
			});
			continue;
		}
		newShape[key] = field;
	}

	return z.object(newShape);
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
				const sanitizedSchema = sanitizeSchema(exportedItem);
				schemas[schemaName] = toJSONSchema(sanitizedSchema);
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
			securitySchemes: {
				bearerAuth: {
					type: "http",
					scheme: "bearer",
				},
			},
		},
	};
	const outputFile = "../swagger-output.json";
	const routes = ["../src/routes/index.ts"];

	await swaggerAutogen({ openapi: "3.0.0" })(outputFile, routes, doc);
}

generateSwaggerDocs().then(async () => {
	await import("../src/index");
});
