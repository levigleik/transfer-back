import { validateBody } from "@/middleware/validation.middleware";
import express from "express";
import { seriousnessController } from "./seriousness.controller";
import {
	createSeriousnessSchema,
	updateSeriousnessSchema,
} from "./seriousness.schemas";

const seriousnessRouter = express.Router();

seriousnessRouter
	.route("/seriousness")
	.get(seriousnessController.getSeriousnesss)
	.post(
		validateBody(createSeriousnessSchema),
		seriousnessController.createSeriousness,
	);

seriousnessRouter
	.route("/seriousness/:id")
	.get(seriousnessController.getOneSeriousness)
	.put(
		validateBody(updateSeriousnessSchema),
		seriousnessController.updateSeriousness,
	)
	.delete(seriousnessController.deleteSeriousness);

export default seriousnessRouter;
