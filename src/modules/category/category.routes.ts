import { validateBody } from "@/middleware/validation.middleware";
import express from "express";
import { categoryController } from "./category.controller";
import {
	createCategorySchema,
	updateCategorySchema,
} from "./category.schemas";

const categoryRouter = express.Router();

categoryRouter
	.route("/category")
	.get(categoryController.getCategorys)
	.post(
		validateBody(createCategorySchema),
		categoryController.createCategory,
	);

categoryRouter
	.route("/category/:id")
	.get(categoryController.getOneCategory)
	.put(
		validateBody(updateCategorySchema),
		categoryController.updateCategory,
	)
	.delete(categoryController.deleteCategory);

export default categoryRouter;
