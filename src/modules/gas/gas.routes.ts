import { validateBody } from "@/middleware/validation.middleware";
import express from "express";
import { gasController } from "./gas.controller";
import {
	createGasSchema,
	updateGasSchema,
} from "./gas.schemas";

const gasRouter = express.Router();

gasRouter
	.route("/gas")
	.get(gasController.getGass)
	.post(
		validateBody(createGasSchema),
		gasController.createGas,
	);

gasRouter
	.route("/gas/:id")
	.get(gasController.getOneGas)
	.put(
		validateBody(updateGasSchema),
		gasController.updateGas,
	)
	.delete(gasController.deleteGas);

export default gasRouter;
