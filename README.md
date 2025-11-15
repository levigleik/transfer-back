# CRUD Project

This project is a full-stack CRUD application using **Node.js**, **Express**, **Prisma**, **Zod**, and **Bun** as runtime and package manager. It comes with automated API documentation, JWT authentication, logging, testing, and containerization.

## Features

* **Express** API server
* **Prisma ORM** with PostgreSQL
* **Zod** schemas with automatic JSON Schema generation for Swagger
* **Swagger Autogen** for API documentation
* **Bun** for runtime, package management, and TypeScript compilation
* **Pino** for logging
* **JWT Authentication** with middleware
* **Redis** caching
* **Docker & Docker Compose** for containerized deployment
* **Healthcheck Route** at `/health`
* **Environment configurations** using `.env` files for dev, test, production, and docker
* **Unit testing** with Jest

## Installation

```bash
# Clone the repository
git clone <repo-url>
cd <repo-directory>

# Install dependencies
bun install
```

## Environment Variables

Create the following `.env` files:

* `.env.development`
* `.env.test`
* `.env.production`
* `.env.docker`

Example variables:

```env
PORT=3000
DATABASE_URL=postgres://user:password@db:5432/app
REDIS_HOST=redis
REDIS_PORT=6379
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_jwt_refresh_secret
NODE_ENV=development
```

## Running in Development

```bash
bun run dev:swagger       # Generate Swagger docs in development mode with watch
bun run dev               # Start development server
```

Swagger will be available at `http://localhost:4000` by default in dev.

## Building and Running in Production

```bash
# Build project and generate Swagger for production
bun run swagger:prod
bun run build
bun run start
```

Server will run on `PORT` specified in `.env.production` (default 3000).

## Docker Deployment

```bash
# Build and start containers
docker-compose up --build
```

Services included:

* `crud_db`: PostgreSQL
* `crud_redis`: Redis
* `crud_app`: Node.js application with Bun

## Testing

```bash
bun run test
```

## Healthcheck

The app provides a healthcheck endpoint:

```
GET /health
```

Returns 200 OK if the service is running.

## Logging

Using **Pino** for structured logging. Logs are printed to console in development and production.

## API Documentation

Swagger documentation is generated automatically using **swagger-autogen** with schemas from Zod. Generated JSON can be found at `swagger-output.json`.

## Notes

* Make sure to run `bunx prisma generate` after modifying Prisma schema.
* Redis is used for caching and session management.
* JWT middleware protects routes requiring authentication.
* All schema validations are done using Zod, with automatic conversion to JSON Schema for Swagger.
* Separate `.env` files allow environment-specific configurations.
