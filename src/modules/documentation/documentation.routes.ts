import { validateBody } from "@/middleware/validation.middleware";
import express from "express";
import { documentationController } from "./documentation.controller";
import {
	createDocumentationSchema,
	updateDocumentationSchema,
} from "./documentation.schemas";

const documentationRouter = express.Router();

documentationRouter
	.route("/documentation")
	.get(documentationController.getDocumentations)
	.post(
		validateBody(createDocumentationSchema),
		documentationController.createDocumentation,
	);

documentationRouter
	.route("/documentation/:id")
	.get(documentationController.getOneDocumentation)
	.put(
		validateBody(updateDocumentationSchema),
		documentationController.updateDocumentation,
	)
	.delete(documentationController.deleteDocumentation);

export default documentationRouter;
