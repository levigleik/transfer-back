const fs = require("fs");
const path = require("path");

const SEEDS_DIR = path.join(__dirname, "prisma/seeds");

/**
 * Modifica o final do array de seed para incluir o tipo { id: number }.
 * @param {string} filePath O caminho completo do arquivo.
 */
function processSeedType(filePath) {
	const fileName = path.basename(filePath);
	const content = fs.readFileSync(filePath, "utf8");

	// Regex para encontrar o padrão de tipagem no final do array:
	// Ex: as Create...DTO[]
	const regex = /as\s+(Create[A-Za-z]+DTO)\[\];/g;

	// String de substituição:
	// $1 captura o nome do DTO (Ex: CreateClassificationDTO)
	// O final é alterado para incluir o tipo { id: number }
	const replacement = "as ($1 & { id: number })[];";

	// Verifica se o arquivo contém o padrão antes de substituir
	if (content.match(regex)) {
		const newContent = content.replace(regex, replacement);

		fs.writeFileSync(filePath, newContent, "utf8");
		console.log(`✅ Tipagem atualizada em ${fileName}`);
	} else {
		console.log(`⚠️ Padrão de tipagem não encontrado em ${fileName}. Ignorado.`);
	}
}

// Roda o script para todos os arquivos .ts na pasta seeds (exceto index.ts)
fs.readdirSync(SEEDS_DIR)
	.filter((file) => file.endsWith(".ts") && file !== "index.ts")
	.forEach((file) => {
		processSeedType(path.join(SEEDS_DIR, file));
	});

console.log("\n--- Processamento de Tipagem Finalizado ---");
