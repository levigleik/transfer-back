import { validateBody } from "@/middleware/validation.middleware";
import express from "express";
import { gasSupplyController } from "./gas-supply.controller";
import {
	createGasSupplySchema,
	updateGasSupplySchema,
} from "./gas-supply.schemas";

const gasSupplyRouter = express.Router();

gasSupplyRouter
	.route("/gasSupply")
	.get(gasSupplyController.getGasSupply)
	.post(
		validateBody(createGasSupplySchema),
		gasSupplyController.createGasSupply,
	);

gasSupplyRouter
	.route("/gasSupply/:id")
	.get(gasSupplyController.getOneGasSupply)
	.put(validateBody(updateGasSupplySchema), gasSupplyController.updateGasSupply)
	.delete(gasSupplyController.deleteGasSupply);

export default gasSupplyRouter;
