import { HttpError } from "@/lib/error/http-error";
import { getQuery } from "@/lib/query";
import type { NextFunction, Request, Response } from "express";
import type { CreateBrandDTO, UpdateBrandDTO } from "./brand.schemas";
import { brandService } from "./brand.service";

const getOneBrand = async (req: Request, res: Response, next: NextFunction) => {
	/*
		#swagger.tags = ['Brand']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Brand found",
			schema: { $ref: '#/components/schemas/PublicBrand' }
		}
		#swagger.responses[404] = {
			description: "Brand not found"
		}
	*/
	const query = getQuery(req);
	const id = Number(req.params.id);
	if (id) {
		query.where = { id };
	}
	const brand = await brandService.findOne(query);
	if (!brand) {
		throw new HttpError("Brand not found", 401);
	}
	res.status(200).json(brand);
};

const getBrands = async (req: Request, res: Response, next: NextFunction) => {
	/*
		#swagger.tags = ['Brand']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Brands found",
			schema: [{ $ref: '#/components/schemas/PublicBrand' }]
		}
	*/
	const query = getQuery(req);
	const brand = await brandService.find(query);
	res.status(200).json(brand);
};

const createBrand = async (req: Request, res: Response, next: NextFunction) => {
	/*
		#swagger.tags = ['Brand']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/createBrand' }
		}
		#swagger.responses[201] = {
			description: "Brand created",
			schema: { $ref: '#/components/schemas/PublicBrand' }
		}
	*/
	const brand = req.body as CreateBrandDTO;
	const savedBrand = await brandService.create({
		data: brand,
	});
	res.status(201).json(savedBrand);
};

const updateBrand = async (req: Request, res: Response, next: NextFunction) => {
	/*
		#swagger.tags = ['Brand']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/updateBrand' }
		}
		#swagger.responses[200] = {
			description: "Brand updated",
			schema: { $ref: '#/components/schemas/PublicBrand' }
		}
		#swagger.responses[404] = {
			description: "Brand not found"
		}
	*/
	const id = Number(req.params.id);
	const data = req.body as Partial<UpdateBrandDTO>;
	const brand = await brandService.update({
		data: {
			name: data.name,
		},
		where: { id },
	});
	if (!brand) {
		throw new HttpError("Brand not found", 404);
	}
	res.status(200).json(brand);
};

const deleteBrand = async (req: Request, res: Response, next: NextFunction) => {
	/*
		#swagger.tags = ['Brand']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Brand deleted",
			schema: { $ref: '#/components/schemas/PublicBrand' }
		}
		#swagger.responses[404] = {
			description: "Brand not found"
		}
	*/
	const id = Number(req.params.id);
	if (!id) throw new HttpError("Invalid id", 404);
	const brand = await brandService.findOne({ where: { id } });
	if (!brand) throw new HttpError("Brand not found", 404);
	const brandDeleted = await brandService.deleteOne({ where: { id } });
	res.status(204).send(brandDeleted);
};

export const brandController = {
	getBrands,
	getOneBrand,
	createBrand,
	updateBrand,
	deleteBrand,
};
