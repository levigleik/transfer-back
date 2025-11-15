import { generateSwaggerDocs } from "./swagger"; // extraia a função do swagger.ts

// define a porta de produção
process.env.PORT = process.env.PORT || "3000";

// apenas gera o arquivo, não importa o index
generateSwaggerDocs().then(() => {
	console.log("✔ Swagger gerado para produção");
	process.exit(0); // termina o processo
});
