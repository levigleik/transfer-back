import { validateBody } from "@/middleware/validation.middleware";
import express from "express";
import { statusController } from "./status.controller";
import {
	createStatusSchema,
	updateStatusSchema,
} from "./status.schemas";

const statusRouter = express.Router();

statusRouter
	.route("/status")
	.get(statusController.getStatuss)
	.post(
		validateBody(createStatusSchema),
		statusController.createStatus,
	);

statusRouter
	.route("/status/:id")
	.get(statusController.getOneStatus)
	.put(
		validateBody(updateStatusSchema),
		statusController.updateStatus,
	)
	.delete(statusController.deleteStatus);

export default statusRouter;
