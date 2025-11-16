import { faker } from "@faker-js/faker/locale/pt_BR";

/**
 * Gera uma placa Mercosul válida (LLL N L NN).
 * Ex: ABC1D34
 * @returns {string} A placa formatada.
 */
export function plateGenerator(): string {
	// 1. Três letras aleatórias (LLL)
	const letras1 = faker.string.alpha({ length: 3, casing: "upper" });

	// 2. Um número aleatório (N)
	const numero1 = faker.number.int({ min: 0, max: 9 });

	// 3. Uma letra aleatória (L)
	const letra2 = faker.string.alpha({ length: 1, casing: "upper" });

	// 4. Dois números aleatórios (NN)
	const numeros2 = faker.number.int({ min: 10, max: 99 });

	// Combina e retorna a placa (Ex: ABC1D34)
	return `${letras1}${numero1}${letra2}${numeros2}`;
}
