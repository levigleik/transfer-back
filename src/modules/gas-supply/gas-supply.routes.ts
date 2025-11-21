import { validateBody } from "@/middleware/validation.middleware";
import express from "express";
import { gasSupplyController } from "./gas-supply.controller";
import {
	createGasSupplySchema,
	updateGasSupplySchema,
} from "./gas-supply.schemas";
import { uploadFiles } from "@/lib/upload-files";

const gasSupplyRouter = express.Router();

const gasSupplyAttachmentsUploader = uploadFiles((req) => {
	return `gasSupply/${req.params.id}/receipt`;
});

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

gasSupplyRouter.post(
	"/gasSupply/:id/receipt",
	gasSupplyAttachmentsUploader.array("files", 1),
	gasSupplyController.uploadGasSupplyFile,
);

export default gasSupplyRouter;
