import { validateBody } from "@/middleware/validation.middleware";
import express from "express";
import { classificationController } from "./classification.controller";
import {
	createClassificationSchema,
	updateClassificationSchema,
} from "./classification.schemas";

const classificationRouter = express.Router();

classificationRouter
	.route("/classification")
	.get(classificationController.getClassifications)
	.post(
		validateBody(createClassificationSchema),
		classificationController.createClassification,
	);

classificationRouter
	.route("/classification/:id")
	.get(classificationController.getOneClassification)
	.put(
		validateBody(updateClassificationSchema),
		classificationController.updateClassification,
	)
	.delete(classificationController.deleteClassification);

export default classificationRouter;
