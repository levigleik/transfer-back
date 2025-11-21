/**
 * Gera um CNPJ brasileiro válido (com dígitos verificadores corretos).
 * @returns {string} O CNPJ no formato '00.000.000/0000-00'.
 */
export function generateCNPJ(): string {
	// 1. Gera os 12 primeiros dígitos (base + filial '0001')
	let cnpj = Array(12)
		.fill(0)
		.map(() => Math.floor(Math.random() * 10))
		.join("");

	// Garante que os últimos 4 dígitos sejam '0001' (filial)
	cnpj = `${cnpj.substring(0, 8)}0001`;

	// 2. Função para calcular o dígito verificador
	const calcularDv = (base: string): number => {
		let tamanho = base.length + 1;
		let soma = 0;
		let peso = 2;

		for (let i = base.length - 1; i >= 0; i--) {
			soma += Number(base[i]) * peso;
			peso = peso === 9 ? 2 : peso + 1;
			tamanho--;
		}

		const resto = soma % 11;
		return resto < 2 ? 0 : 11 - resto;
	};

	// 3. Calcula o primeiro DV
	const dv1 = calcularDv(cnpj);
	cnpj += dv1;

	// 4. Calcula o segundo DV
	const dv2 = calcularDv(cnpj);
	cnpj += dv2;

	// 5. Formata o resultado
	return cnpj.replace(
		/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
		"$1.$2.$3/$4-$5",
	);
}
