# syntax=docker/dockerfile:1

# ---- Bun all-in-one ----
FROM oven/bun:1

WORKDIR /app

# Copia apenas arquivos necessários para instalar dependências
COPY package.json bun.lock yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Instala dependências com cache
RUN --mount=type=cache,target=/root/.cache/bun \
	bun install --frozen-lockfile

# Copia código fonte completo
COPY tsconfig.json ./
COPY prisma ./prisma
COPY src ./src
COPY scripts ./scripts
COPY swagger-output.json ./swagger-output.json

# Gera cliente Prisma
RUN bunx prisma generate


# Gera build de produção
RUN bun run build

# Gera documentação Swagger
RUN node dist/scripts/swagger.prod.js
