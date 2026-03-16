import { generateSwaggerDocs } from "./swagger"; // extraia a função do swagger.ts

process.env.PORT = process.env.PORT || "3000";

generateSwaggerDocs().then(() => {
	console.log("✔ Swagger gerado para produção");
	process.exit(0);
});
