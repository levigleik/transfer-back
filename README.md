# API de Gerenciamento de Frota

Esta é uma API RESTful robusta construída com Node.js e TypeScript, projetada para o gerenciamento completo de frotas de veículos. Ela oferece funcionalidades para cadastro de veículos, motoristas, ocorrências, controle de abastecimento, documentação e muito mais.

## 📋 Tabela de Conteúdos

- [Tecnologias e Ferramentas](#-tecnologias-e-ferramentas)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Pré-requisitos](#-pré-requisitos)
- [Como Executar (Docker)](#-como-executar-com-docker-recomendado)
- [Como Executar (Localmente)](#-como-executar-localmente)
  - [1. Variáveis de Ambiente](#1-variáveis-de-ambiente)
  - [2. Instalação de Dependências](#2-instalação-de-dependências)
  - [3. Banco de Dados](#3-banco-de-dados)
  - [4. Executando a Aplicação](#4-executando-a-aplicação)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Documentação da API](#-documentação-da-api)

---

## 🚀 Tecnologias e Ferramentas

Este projeto utiliza um conjunto de tecnologias modernas para garantir performance, escalabilidade e manutenibilidade.

- **Backend:** Node.js com TypeScript
- **Framework:** Express.js para o roteamento e middlewares
- **Banco de Dados:** PostgreSQL
- **ORM:** Prisma para uma interação segura e tipada com o banco de dados
- **Cache:** Redis para caching de queries e gerenciamento de sessões
- **Validação:** Zod para validação de schemas e dados de entrada
- **Containerização:** Docker e Docker Compose para um ambiente de desenvolvimento e produção consistente
- **Linting e Formatação:** Biome para garantir um código limpo e padronizado
- **Documentação de API:** Swagger para geração automática de documentação interativa

---

## 📁 Estrutura de Pastas

A estrutura do projeto é organizada de forma modular, visando a separação de responsabilidades e a fácil localização dos arquivos.

```
/
├── prisma/             # Contém o schema do banco, migrações e seeds
├── scripts/            # Scripts utilitários (ex: geração de módulos, swagger)
├── src/                # Código-fonte da aplicação
│   ├── lib/            # Módulos e utilitários compartilhados (Prisma, Redis, etc.)
│   ├── middleware/     # Middlewares do Express (erros, validação)
│   ├── modules/        # Módulos de negócio da aplicação (veículos, usuários, etc.)
│   │   ├── brand/      # Exemplo de um módulo com controller, service, routes e schemas
│   │   └── ...         # Outros módulos...
│   ├── routes/         # Arquivo principal que agrega todas as rotas
│   └── app.ts          # Arquivo de configuração principal do Express
├── tests/              # Testes da aplicação
├── uploads/            # Pasta para armazenamento de arquivos enviados (documentos, imagens)
├── .dockerignore       # Arquivos a serem ignorados pelo Docker
├── .gitignore          # Arquivos a serem ignorados pelo Git
├── docker-compose.yml  # Orquestração dos containers (API, Postgres, Redis)
├── Dockerfile          # Definição do container da API
├── package.json        # Dependências e scripts do projeto
└── tsconfig.json       # Configurações do compilador TypeScript
```

---

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/en/) (v18 ou superior)
- [Docker](https://www.docker.com/get-started) e [Docker Compose](https://docs.docker.com/compose/install/)
- Um gerenciador de pacotes: [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), [Yarn](https://classic.yarnpkg.com/en/docs/install) ou [Bun](https://bun.sh/docs/installation)

---

## 🐳 Como Executar com Docker (Recomendado)

A forma mais simples e rápida de subir todo o ambiente (API, Postgres e Redis) é utilizando o Docker Compose.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/levigleik/transfer-back
    cd transfer-back
    ```
2. Crie o arquivo `.env.docker` ou copie de `env.docker.sample`

3.  **Suba os containers:**
    Execute o comando a seguir na raiz do projeto. Ele irá construir a imagem da API e iniciar os serviços de banco de dados e cache em background.
    ```bash
    docker-compose up -d
    ```

A API estará disponível em `http://localhost:3000`.

Para parar todos os serviços, execute:
```bash
docker-compose down
```

---

## 💻 Como Executar Localmente

Siga os passos abaixo para configurar e rodar o projeto diretamente na sua máquina.

### 1. Variáveis de Ambiente

Crie um arquivo `.env.development` na raiz do projeto, copiando o exemplo do arquivo `env.example` (se existir) ou usando o modelo abaixo. Substitua os valores conforme necessário. (não se esqueça do ponto antes do env)

```env
# Variáveis da Aplicação
NODE_ENV=development
PORT=3000

# URL de Conexão com o Banco de Dados (PostgreSQL)
DATABASE_URL="postgresql://postgres:suasenhaaqui@localhost:5432/transfer-back?schema=public"

# URL de Conexão com o Redis
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_PASSWORD=

```

### 2. Instalação de Dependências

#### Instalar bun:
- Linux & macOS: 

```bash
curl -fsSL https://bun.sh/install | bash
```

- Windows: 
```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

Para garantir a compatibilidade, atualize o bun executando ou instalando novamente no passo acima:
```bash
bun upgrade
```
## Execute o comando correspondente na raiz do projeto:

```bash
bun install
```

### 3. Banco de Dados

Assumindo que você tenha uma instância do PostgreSQL rodando localmente, execute os seguintes comandos do Prisma para preparar o banco de dados:

1.  **Aplicar as migrações:**
    Este comando irá criar as tabelas e estruturas no banco de dados com base nos arquivos de migração. 
    
    (execute o script do package.json "prisma_migrate:dev")
    ```bash
    npm run prisma_migrate:dev
    ```

2.  **(Opcional) Popular o banco de dados:**
    Este comando executa os scripts da pasta `prisma/seeds` para popular o banco com dados iniciais.
    ```bash
    npx prisma db seed
    ```

### 4. Executando a Aplicação

Para iniciar o servidor em modo de desenvolvimento (com hot-reload), utilize o script `dev`:

```bash
# Com Bun
bun dev
```

---

## 📜 Scripts Disponíveis

O arquivo `package.json` contém scripts úteis para o desenvolvimento:

### 🧪 Desenvolvimento
- **`dev`**: Inicia o servidor em modo de desenvolvimento com recarregamento automático (`tsx watch`) e variáveis de ambiente de desenvolvimento.
- **`dev:swagger`**: Executa o gerador de documentação Swagger em modo de desenvolvimento com hot reload.

### 🛠️ Build & Produção
- **`build`**: Compila o código TypeScript para JavaScript e ajusta caminhos com `tsc-alias`.
- **`start`**: Inicia o servidor em modo de produção usando os arquivos compilados em `dist`.
- **`swagger:prod`**: Gera a documentação Swagger para produção.

### 🧰 Geração & Utilitários
- **`generate:module`**: Executa o script de geração automática de módulos. 
#### Exemplo de uso

```bash
 npm run generate:module user
```

Esse comando deve criar 4 arquivos (**schema**, **service**, **controller** e **routes**) do módulo user

- **`lint`**: Formata o código com Biome e executa a análise de lint.

### 🗄️ Prisma (Banco de Dados)
- **`prisma_studio:dev`**: Abre o Prisma Studio usando variáveis de ambiente de desenvolvimento.
- **`prisma_studio:test`**: Abre o Prisma Studio com as configurações de teste.
- **`prisma_studio:prod`**: Abre o Prisma Studio configurado para produção.
- **`prisma_migrate:dev`**: Executa migrações no ambiente de desenvolvimento.
- **`prisma_deploy:dev`**: Aplica migrações já geradas no ambiente de desenvolvimento.
- **`prisma_deploy:prod`**: Aplica migrações no ambiente de produção.
- **`prisma_reset:docker`**: Reseta o banco do docker.
- **`prisma_reset:dev`**: Reseta o banco de desenvolvimento.

---

## 📚 Documentação da API

Quando a aplicação está em execução, a documentação interativa do Swagger fica disponível. Você pode acessá-la para visualizar e testar todos os endpoints, existem 2 opções de layout:

- ### Swagger UI

    [http://localhost:3000/doc](http://localhost:3000/doc)

- ### Scalar (design mais moderno)

    [http://localhost:3000/doc-scalar](http://localhost:3000/doc-scalar)
