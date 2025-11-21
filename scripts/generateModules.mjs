#!/usr/bin/env node

import { access, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

// --- Constantes de Configuração ---

// O nome do módulo que servirá de template
const TEMPLATE_NAME = "illustration";

// O diretório onde os templates estão localizados
const TEMPLATE_DIR = path.resolve(process.cwd(), "scripts", "templates");

// O diretório raiz onde os novos módulos serão criados
const MODULES_DIR = path.resolve(process.cwd(), "src", "modules");

// --- Funções Auxiliares de Nomenclatura ---

/** Converte uma string para PascalCase (ex: "userPost" -> "UserPost") */
const toPascalCase = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/** Converte uma string para camelCase (ex: "UserPost" -> "userPost") */
const toCamelCase = (s) => s.charAt(0).toLowerCase() + s.slice(1);

/** Converte uma string para kebab-case (ex: "userPost" -> "user-post") */
const toKebabCase = (s) =>
	s.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();

/**
 * Obtém todas as variações de nome para um determinado nome de modelo.
 * @param {string} name - O nome do modelo (ex: "userPost")
 */
const getNameVariations = (name) => {
	const camelCase = toCamelCase(name);
	return {
		/** ex: "UserPost" */
		pascalCase: toPascalCase(name),
		/** ex: "userPost" */
		camelCase: camelCase,
		/** ex: "user-post" */
		kebabCase: toKebabCase(name),
	};
};

/**
 * Obtém as variações de nome do *template*.
 */
const templateNames = {
	pascalCase: toPascalCase(TEMPLATE_NAME), // "Illustration"
	camelCase: toCamelCase(TEMPLATE_NAME), // "illustration"
	kebabCase: toKebabCase(TEMPLATE_NAME), // "illustration"
};

// --- Função Principal ---

const main = async () => {
	console.log("🚀 Iniciando gerador de módulo...");

	// 1. Obter o nome do modelo a partir dos argumentos da linha de comando
	const modelName = process.argv[2];
	if (!modelName) {
		console.error("❌ Erro: Você deve fornecer um nome para o módulo.");
		console.log("Exemplo: node scripts/generateModule.mjs userPost");
		process.exit(1);
	}

	// 2. Definir variações de nome para o *novo* módulo
	const newNames = getNameVariations(modelName);
	console.log(
		`Buscando template '${TEMPLATE_NAME}' para criar módulo '${newNames.kebabCase}'...`,
	);

	// 3. Definir caminhos
	const outputDir = path.join(MODULES_DIR, newNames.kebabCase);
	const filesToGenerate = [
		{
			template: `${templateNames.kebabCase}.controller.ts`,
			output: `${newNames.kebabCase}.controller.ts`,
		},
		{
			template: `${templateNames.kebabCase}.routes.ts`,
			output: `${newNames.kebabCase}.routes.ts`,
		},
		{
			template: `${templateNames.kebabCase}.schemas.ts`,
			output: `${newNames.kebabCase}.schemas.ts`,
		},
		{
			template: `${templateNames.kebabCase}.service.ts`,
			output: `${newNames.kebabCase}.service.ts`,
		},
	];

	try {
		try {
			await access(outputDir);
			// Se access não der erro, o diretório existe
			console.error(
				`❌ Erro: O módulo '${newNames.kebabCase}' já existe em ${outputDir}.`,
			);
			console.error("   Abortando para evitar sobrescrita acidental.");
			process.exit(1);
		} catch (e) {
			// Se der erro, significa que o diretório não existe (o que é bom nesse caso)
		}
		// 4. Criar o novo diretório do módulo
		await mkdir(outputDir, { recursive: true });
		console.log(`✅ Diretório criado: ${outputDir}`);

		// 5. Ler, modificar e escrever cada arquivo
		for (const file of filesToGenerate) {
			const templatePath = path.join(TEMPLATE_DIR, file.template);
			const outputPath = path.join(outputDir, file.output);

			// Ler o conteúdo do template
			let content = await readFile(templatePath, "utf-8");

			// **A Mágica da Substituição (em ordem de especificidade)**

			// 1. Substitui PascalCase (ex: Illustration, CreateIllustrationDTO)
			content = content.replace(
				new RegExp(templateNames.pascalCase, "g"),
				newNames.pascalCase,
			);

			// 2. Substitui camelCase (ex: illustrationService, illustration)
			content = content.replace(
				new RegExp(templateNames.camelCase, "g"),
				newNames.camelCase,
			);

			// 3. Corrige as importações.
			// Após o passo 2, uma importação como "./illustration.service"
			// tornou-se "./userPost.service" (usando camelCase).
			// Precisamos que ela seja "./user-post.service" (kebab-case).
			// Usamos uma regex para corrigir *apenas* os caminhos de importação.
			const importRegex = new RegExp(
				`from "\\.\\/${newNames.camelCase}(\\.controller|\\.service|\\.schemas)"`,
				"g",
			);
			content = content.replace(
				importRegex,
				`from "./${newNames.kebabCase}$1"`,
			);

			// Escrever o novo arquivo
			await writeFile(outputPath, content, "utf-8");
			console.log(`✅ Arquivo criado: ${outputPath}`);
		}

		console.log("🎉 Módulo gerado com sucesso!");
	} catch (error) {
		console.error("🔥 Ocorreu um erro durante a geração:", error.message);
		process.exit(1);
	}
};

main();
