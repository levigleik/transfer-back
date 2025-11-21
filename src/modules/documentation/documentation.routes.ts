import { validateBody } from "@/middleware/validation.middleware";
import express from "express";
import { documentationController } from "./documentation.controller";
import {
	createDocumentationSchema,
	updateDocumentationSchema,
} from "./documentation.schemas";
import { uploadFiles } from "@/lib/upload-files";

const documentationRouter = express.Router();

const documentationDocsUploader = uploadFiles((req) => {
	return `documentation/${req.params.id}/docs`;
});

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

documentationRouter.post(
	"/documentation/:id/docs",
	documentationDocsUploader.array("files", 1),
	documentationController.uploadDocumentationFile,
);

export default documentationRouter;
