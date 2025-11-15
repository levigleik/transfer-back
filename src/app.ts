import { router } from "@/routes";
import { apiReference } from "@scalar/express-api-reference";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { type Express } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "../swagger-output.json";
import { httpLogger } from "./lib/logger";
import { errorMiddleware } from "./middleware/error.middleware";

const app: Express = express();
app.use(cookieParser());
app.use(express.json());
app.use(httpLogger);
app.use(
	cors({
		origin: "*",
	}),
);

app.use(
	"/doc",
	swaggerUi.serve,
	swaggerUi.setup(swaggerFile, {
		swaggerOptions: {
			persistAuthorization: true,
		},
	}),
);
app.get("/swagger-output.json", (_, res) => {
	res.json(swaggerFile);
});
app.use(
	"/doc-scalar",
	apiReference({
		url: "/swagger-output.json",
		persistAuth: true,
	}),
);
app.use(router);

app.use(errorMiddleware);

export { app };
