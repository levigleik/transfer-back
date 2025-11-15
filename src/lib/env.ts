import { z } from "zod";

const envSchema = z
	.object({
		NODE_ENV: z
			.enum(["development", "production", "test"])
			.default("development"),
		PORT: z.coerce.number().int().positive().default(3000),

		DATABASE_URL: z.url({ message: "DATABASE_URL inválida." }),

		ADMIN_EMAIL: z.email(),
		ADMIN_PASSWORD: z.string().min(8),

		JWT_SECRET: z
			.string()
			.min(32, { message: "JWT_SECRET deve ter no mínimo 32 caracteres." }),
		JWT_REFRESH_SECRET: z.string().min(32, {
			message: "JWT_REFRESH_SECRET deve ter no mínimo 32 caracteres.",
		}),

		REDIS_URL: z.url().optional(),
		REDIS_HOST: z.string().optional(),
		REDIS_PORT: z.coerce.number().int().positive().optional(),
		REDIS_PASSWORD: z.string().optional(),
		REDIS_DB: z.coerce.number().int().optional(),
	})
	.refine(
		(data) => {
			if (data.REDIS_URL && data.REDIS_HOST) {
				return false;
			}
			return !(!data.REDIS_URL && !data.REDIS_HOST);
		},
		{
			message:
				"Configuração do Redis inválida: Forneça a REDIS_URL completa OU os campos REDIS_HOST/PORT, mas não ambos.",

			path: ["REDIS_URL", "REDIS_HOST"],
		},
	);

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
	console.error(
		"❌ Erro de validação nas variáveis de ambiente:",
		parsedEnv.error.issues,
	);

	throw new Error(
		"Variáveis de ambiente faltando ou inválidas. Verifique o log acima.",
	);
}

export const env = parsedEnv.data;

export type Env = z.infer<typeof envSchema>;
