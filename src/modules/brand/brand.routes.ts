import { validateBody } from "@/middleware/validation.middleware";
import express from "express";
import { brandController } from "./brand.controller";
import {
	createBrandSchema,
	updateBrandSchema,
} from "./brand.schemas";

const brandRouter = express.Router();

brandRouter
	.route("/brand")
	.get(brandController.getBrands)
	.post(
		validateBody(createBrandSchema),
		brandController.createBrand,
	);

brandRouter
	.route("/brand/:id")
	.get(brandController.getOneBrand)
	.put(
		validateBody(updateBrandSchema),
		brandController.updateBrand,
	)
	.delete(brandController.deleteBrand);

export default brandRouter;
