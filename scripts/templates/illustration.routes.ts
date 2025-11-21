import { validateBody } from "@/middleware/validation.middleware";
import express from "express";
import { illustrationController } from "./illustration.controller";
import {
	createIllustrationSchema,
	updateIllustrationSchema,
} from "./illustration.schemas";

const illustrationRouter = express.Router();

illustrationRouter
	.route("/illustration")
	.get(illustrationController.getIllustrations)
	.post(
		validateBody(createIllustrationSchema),
		illustrationController.createIllustration,
	);

illustrationRouter
	.route("/illustration/:id")
	.get(illustrationController.getOneIllustration)
	.put(
		validateBody(updateIllustrationSchema),
		illustrationController.updateIllustration,
	)
	.delete(illustrationController.deleteIllustration);

export default illustrationRouter;
