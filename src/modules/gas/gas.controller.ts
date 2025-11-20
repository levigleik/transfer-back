import { HttpError } from "@/lib/error/http-error";
import { getQuery } from "@/lib/query";
import type { NextFunction, Request, Response } from "express";
import type { CreateGasDTO, UpdateGasDTO } from "./gas.schemas";
import { gasService } from "./gas.service";

const getOneGas = async (req: Request, res: Response, next: NextFunction) => {
	/*
		#swagger.tags = ['Gas']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Gas found",
			schema: { $ref: '#/components/schemas/PublicGas' }
		}
		#swagger.responses[404] = {
			description: "Gas not found"
		}
	*/
	const query = getQuery(req);
	const id = Number(req.params.id);
	if (id) {
		query.where = { id };
	}
	const gas = await gasService.findOne(query);
	if (!gas) {
		throw new HttpError("Gas not found", 401);
	}
	res.status(200).json(gas);
};

const getGass = async (req: Request, res: Response, next: NextFunction) => {
	/*
		#swagger.tags = ['Gas']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Gass found",
			schema: [{ $ref: '#/components/schemas/PublicGas' }]
		}
	*/
	const query = getQuery(req);
	const gas = await gasService.find(query);
	res.status(200).json(gas);
};

const createGas = async (req: Request, res: Response, next: NextFunction) => {
	/*
		#swagger.tags = ['Gas']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/createGas' }
		}
		#swagger.responses[201] = {
			description: "Gas created",
			schema: { $ref: '#/components/schemas/PublicGas' }
		}
	*/
	const gas = req.body as CreateGasDTO;
	const savedGas = await gasService.create({
		data: gas,
	});
	res.status(201).json(savedGas);
};

const updateGas = async (req: Request, res: Response, next: NextFunction) => {
	/*
		#swagger.tags = ['Gas']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.requestBody = {
			required: true,
			schema: { $ref: '#/components/schemas/updateGas' }
		}
		#swagger.responses[200] = {
			description: "Gas updated",
			schema: { $ref: '#/components/schemas/PublicGas' }
		}
		#swagger.responses[404] = {
			description: "Gas not found"
		}
	*/
	const id = Number(req.params.id);
	const data = req.body as Partial<UpdateGasDTO>;
	const gas = await gasService.update({
		data: {
			type: data.type,
		},
		where: { id },
	});
	if (!gas) {
		throw new HttpError("Gas not found", 404);
	}
	res.status(200).json(gas);
};

const deleteGas = async (req: Request, res: Response, next: NextFunction) => {
	/*
		#swagger.tags = ['Gas']
		#swagger.security = [{
      "bearerAuth": []
    }]
		#swagger.responses[200] = {
			description: "Gas deleted",
			schema: { $ref: '#/components/schemas/PublicGas' }
		}
		#swagger.responses[404] = {
			description: "Gas not found"
		}
	*/
	const id = Number(req.params.id);
	if (!id) throw new HttpError("Invalid id", 404);
	const gas = await gasService.findOne({ where: { id } });
	if (!gas) throw new HttpError("Gas not found", 404);
	const gasDeleted = await gasService.deleteOne({ where: { id } });
	res.status(204).send(gasDeleted);
};

export const gasController = {
	getGass,
	getOneGas,
	createGas,
	updateGas,
	deleteGas,
};
