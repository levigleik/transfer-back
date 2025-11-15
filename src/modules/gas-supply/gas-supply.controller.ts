import { HttpError } from "@/lib/error/http-error";
import { getQuery } from "@/lib/query";
import type { NextFunction, Request, Response } from "express";
import type {
	CreateGasSupplyDTO,
	UpdateGasSupplyDTO,
} from "./gas-supply.schemas";
import { gasSupplyService } from "./gas-supply.service";

const getOneGasSupply = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['GasSupply']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "GasSupply found",
			schema: { $ref: '#/components/schemas/PublicGasSupply' }
		}
		#swagger.responses[404] = {
			description: "GasSupply not found"
		}
	*/
	const query = getQuery(req);
	const id = Number(req.params.id);
	if (id) {
		query.where = { id };
	}
	const gasSupply = await gasSupplyService.findOne(query);
	if (!gasSupply) {
		throw new HttpError("GasSupply not found", 401);
	}
	res.status(200).json(gasSupply);
};

const getGasSupply = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['GasSupply']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "GasSupply found",
			schema: [{ $ref: '#/components/schemas/PublicGasSupply' }]
		}
	*/
	const query = getQuery(req);
	const gasSupply = await gasSupplyService.find(query);
	res.status(200).json(gasSupply);
};

const createGasSupply = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['GasSupply']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/createGasSupply' }
		}
		#swagger.responses[201] = {
			description: "GasSupply created",
			schema: { $ref: '#/components/schemas/PublicGasSupply' }
		}
	*/
	const gasSupply = req.body as CreateGasSupplyDTO;
	const savedGasSupply = await gasSupplyService.create({ data: gasSupply });
	res.status(201).json(savedGasSupply);
};

const updateGasSupply = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['GasSupply']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/updateGasSupply' }
		}
		#swagger.responses[200] = {
			description: "GasSupply updated",
			schema: { $ref: '#/components/schemas/PublicGasSupply' }
		}
		#swagger.responses[404] = {
			description: "GasSupply not found"
		}
	*/
	const id = Number(req.params.id);
	const data = req.body as Partial<UpdateGasSupplyDTO>;
	const gasSupply = await gasSupplyService.update({
		data: {
			kmToReview: data.kmToReview,
			kmToStop: data.kmToStop,
			supplyAt: data.supplyAt,
			quantity: data.quantity,
			totalPrice: data.totalPrice,
		},
		where: { id },
	});
	if (!gasSupply) {
		throw new HttpError("GasSupply not found", 404);
	}
	res.status(200).json(gasSupply);
};

const deleteGasSupply = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	/*
		#swagger.tags = ['GasSupply']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "GasSupply deleted",
			schema: { $ref: '#/components/schemas/PublicGasSupply' }
		}
		#swagger.responses[404] = {
			description: "GasSupply not found"
		}
	*/
	const id = Number(req.params.id);
	if (!id) throw new HttpError("Invalid id", 404);
	const gasSupply = await gasSupplyService.findOne({ where: { id } });
	if (!gasSupply) throw new HttpError("GasSupply not found", 404);
	await gasSupplyService.deleteOne({ where: { id } });
	res.status(204).send();
};

export const gasSupplyController = {
	getGasSupply,
	getOneGasSupply,
	createGasSupply,
	updateGasSupply,
	deleteGasSupply,
};
