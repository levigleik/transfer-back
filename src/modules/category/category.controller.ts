import { HttpError } from "@/lib/error/http-error";
import { getQuery } from "@/lib/query";
import type { NextFunction, Request, Response } from "express";
import type { CreateCategoryDTO, UpdateCategoryDTO } from "./category.schemas";
import { categoryService } from "./category.service";

const getOneCategory = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Category']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Category found",
			schema: { $ref: '#/components/schemas/PublicCategory' }
		}
		#swagger.responses[404] = {
			description: "Category not found"
		}
	*/
	const query = getQuery(req);
	const id = Number(req.params.id);
	if (id) {
		query.where = { id };
	}
	const category = await categoryService.findOne(query);
	if (!category) {
		throw new HttpError("Category not found", 401);
	}
	res.status(200).json(category);
};

const getCategorys = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Category']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Categorys found",
			schema: [{ $ref: '#/components/schemas/PublicCategory' }]
		}
	*/
	const query = getQuery(req);
	const category = await categoryService.find(query);
	res.status(200).json(category);
};

const createCategory = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Category']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/createCategory' }
		}
		#swagger.responses[201] = {
			description: "Category created",
			schema: { $ref: '#/components/schemas/PublicCategory' }
		}
	*/
	const category = req.body as CreateCategoryDTO;
	const savedCategory = await categoryService.create({
		data: category,
	});
	res.status(201).json(savedCategory);
};

const updateCategory = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Category']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/updateCategory' }
		}
		#swagger.responses[200] = {
			description: "Category updated",
			schema: { $ref: '#/components/schemas/PublicCategory' }
		}
		#swagger.responses[404] = {
			description: "Category not found"
		}
	*/
	const id = Number(req.params.id);
	const data = req.body as Partial<UpdateCategoryDTO>;
	const category = await categoryService.update({
		data: {
			name: data.name,
		},
		where: { id },
	});
	if (!category) {
		throw new HttpError("Category not found", 404);
	}
	res.status(200).json(category);
};

const deleteCategory = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['Category']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Category deleted",
			schema: { $ref: '#/components/schemas/PublicCategory' }
		}
		#swagger.responses[404] = {
			description: "Category not found"
		}
	*/
	const id = Number(req.params.id);
	if (!id) throw new HttpError("Invalid id", 404);
	const category = await categoryService.findOne({ where: { id } });
	if (!category) throw new HttpError("Category not found", 404);
	await categoryService.deleteOne({ where: { id } });
	res.status(204).send();
};

export const categoryController = {
	getCategorys,
	getOneCategory,
	createCategory,
	updateCategory,
	deleteCategory,
};
