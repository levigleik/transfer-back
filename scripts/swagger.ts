// scripts/swagger.prod.ts
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { glob } from "glob";
import { ZodDate, ZodNullable, ZodOptional, toJSONSchema, z } from "zod";

// compatibilidade __filename / __dirname tanto em CJS quanto ESM
const __filename_local =
	typeof __filename !== "undefined"
		? __filename
		: fileURLToPath(import.meta.url);
const __dirname_local =
	typeof __dirname !== "undefined" ? __dirname : path.dirname(__filename_local);

// createRequire para carregar pacotes CJS em ESM
const require = createRequire(import.meta.url);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const swaggerAutogen = require("swagger-autogen");

// --- helpers do seu script original ---

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

// --- função de geração (varre schemas, monta doc) ---
export async function generateSwaggerDocs() {
	const schemas: Record<string, any> = {};

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

	// ---- resolução dinâmica e robusta de routes/output ----
	await runSwaggerGen(doc);
}

// ---- rotina robusta que localiza o arquivo de routes e chama swagger-autogen ----
async function runSwaggerGen(doc: any) {
	try {
		// projectRoot: dois níveis acima se estivermos em dist/scripts, ou um nível se em src/scripts
		let projectRoot = path.resolve(__dirname_local, "..", "..");
		// se isso não existir, fallback para um nível acima
		if (!fs.existsSync(path.join(projectRoot, "package.json"))) {
			projectRoot = path.resolve(__dirname_local, "..");
		}

		// candidates relativos/absolutos para o arquivo de rotas
		const candidates = [
			path.join(projectRoot, "dist/src/routes/index.js"),
			path.join(projectRoot, "dist/src/routes/index.cjs"),
			path.join(projectRoot, "dist/src/routes/index.mjs"),
			path.join(projectRoot, "src/routes/index.ts"),
			path.join(projectRoot, "src/routes/index.js"),
			path.join(__dirname_local, "../src/routes/index.ts"),
			path.join(__dirname_local, "../src/routes/index.js"),
		];

		let foundRoute: string | null = null;
		for (const cand of candidates) {
			if (fs.existsSync(cand)) {
				foundRoute = cand;
				break;
			}
		}

		// se não encontrou, tenta buscar por padrão em dist/src/**/routes/index.(js|ts)
		if (!foundRoute) {
			const tryDirs = [
				path.join(projectRoot, "dist/src"),
				path.join(projectRoot, "src"),
			];
			for (const tryDir of tryDirs) {
				if (!fs.existsSync(tryDir)) continue;
				const found = searchForRoutesIndex(tryDir);
				if (found) {
					foundRoute = found;
					break;
				}
			}
		}

		if (!foundRoute) {
			console.error(
				"[swagger-autogen]: Error! File not found: expected routes file (tried multiple candidates).",
			);
			console.error("Candidates tried:", candidates);
			process.exitCode = 1;
			return;
		}

		// usa absolute path para evitar problemas de cwd
		const outputFile = path.resolve(projectRoot, "swagger-output.json");
		const routes = [foundRoute];

		console.log("[swagger-autogen] using route file:", foundRoute);
		console.log("[swagger-autogen] writing output to:", outputFile);

		await swaggerAutogen({ openapi: "3.0.0" })(outputFile, routes, doc);
		console.log("[swagger-autogen] done.");
	} catch (err) {
		console.error("Error generating swagger:", err);
		process.exit(1);
	}
}

function searchForRoutesIndex(dir: string): string | null {
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	for (const e of entries) {
		const p = path.join(dir, e.name);
		if (e.isDirectory()) {
			const found = searchForRoutesIndex(p);
			if (found) return found;
		} else if (e.isFile()) {
			const normalized = p.replace(/\\/g, "/");
			if (/routes\/index\.(js|ts|cjs|mjs)$/.test(normalized)) return p;
		}
	}
	return null;
}

// executa imediatamente quando chamado diretamente
if (
	import.meta.url === `file://${fileURLToPath(import.meta.url)}` ||
	process.argv[1]?.includes("swagger.prod")
) {
	// se foi invocado diretamente via node dist/.../swagger.prod.js
	generateSwaggerDocs().catch((err) => {
		console.error(err);
		process.exit(1);
	});
}
